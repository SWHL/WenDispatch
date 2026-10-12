import type { CanonicalPost, PlatformId, PublishTarget } from './index';

export type PreflightSeverity = 'error' | 'warning' | 'info';
export type PreflightStatus = 'pass' | 'warning' | 'blocked';
export type PreflightCheckId = 'title' | 'content' | 'images' | 'tags' | 'categories' | 'cover' | 'math' | 'mermaid' | 'tables' | 'transform';

export interface PreflightIssue {
  id: string;
  check: PreflightCheckId;
  severity: PreflightSeverity;
  message: string;
  suggestion?: string;
  assetId?: string;
  blocking: boolean;
}

export interface PreflightImage {
  assetId?: string;
  sourceUrl: string;
  action: 'keep-external' | 'upload' | 'manual';
  status: 'ready' | 'warning' | 'error';
  message?: string;
}

export interface PreflightArtifact {
  format: 'markdown' | 'html';
  title: string;
  summary?: string;
  tags?: string[];
  categories?: string[];
  contentMarkdown?: string;
  contentHtml?: string;
  images: PreflightImage[];
  fingerprint: string;
}

export interface PlatformPreflightResult {
  platform: PlatformId;
  accountId?: string;
  platformName: string;
  status: PreflightStatus;
  errors: PreflightIssue[];
  warnings: PreflightIssue[];
  infos: PreflightIssue[];
  artifact: PreflightArtifact;
  manualSteps: string[];
  checkedAt: number;
}

export interface PreflightResult {
  postId: string;
  postVersion?: number;
  results: PlatformPreflightResult[];
  canCreateJob: boolean;
  requiresWarningConfirmation: boolean;
  checkedAt: number;
}

export interface PreflightInput { post: CanonicalPost; target: PublishTarget; }
