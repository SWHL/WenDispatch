import { beforeEach, describe, expect, it, vi } from 'vitest';

const mock = vi.hoisted(() => ({
  jobsGet: vi.fn(),
  jobsUpdate: vi.fn(),
  postsGet: vi.fn(),
  publishToTarget: vi.fn(),
  resetSyncGroup: vi.fn(),
}));

vi.mock('@wendispatch/core', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@wendispatch/core')>();
  return {
    ...actual,
    db: {
      jobs: { get: mock.jobsGet, update: mock.jobsUpdate },
      posts: { get: mock.postsGet },
      platformMaps: { where: vi.fn(), add: vi.fn(), update: vi.fn() },
    },
  };
});
vi.mock('../publish-engine', () => ({ publishToTarget: mock.publishToTarget }));
vi.mock('../tab-group-manager', () => ({ resetSyncGroup: mock.resetSyncGroup }));

import { markJobFailed, startJob } from '../job-service';

const pendingJob = { id: 'job-1', postId: 'post-1', state: 'PENDING', targets: [] };
const runningJob = { ...pendingJob, state: 'RUNNING' };

describe('job failure state persistence', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mock.jobsGet.mockResolvedValue(pendingJob);
    mock.jobsUpdate.mockResolvedValue(1);
    mock.postsGet.mockResolvedValue({ id: 'post-1', title: 'Test' });
  });

  it('persists FAILED when the fire-and-forget execution rejects before its own try/catch', async () => {
    mock.jobsGet
      .mockResolvedValueOnce(pendingJob) // startJob read
      .mockRejectedValueOnce(new Error('execute read boom')) // executeJob read
      .mockResolvedValue(runningJob); // markJobFailed read

    await expect(startJob('job-1')).resolves.toEqual({ success: true });

    await vi.waitFor(() => {
      expect(mock.jobsUpdate).toHaveBeenCalledWith(
        'job-1',
        expect.objectContaining({ state: 'FAILED', error: 'execute read boom' }),
      );
    });
  });

  it('persists FAILED when the RUNNING transition itself fails', async () => {
    mock.jobsUpdate
      .mockRejectedValueOnce(new Error('write boom'))
      .mockResolvedValue(1);

    await expect(startJob('job-1')).rejects.toThrow('write boom');
    expect(mock.jobsUpdate).toHaveBeenCalledWith(
      'job-1',
      expect.objectContaining({ state: 'FAILED', error: 'write boom' }),
    );
  });

  it('does not overwrite a terminal state with FAILED', async () => {
    mock.jobsGet.mockResolvedValue({ ...runningJob, state: 'PAUSED' });

    await markJobFailed('job-1', 'late failure');

    expect(mock.jobsUpdate).not.toHaveBeenCalled();
  });
});
