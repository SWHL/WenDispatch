export const AGENT_NATIVE_HOST_NAME = 'org.wendispatch.bridge';
export const AGENT_HTTP_HOST = '127.0.0.1';
export const AGENT_HTTP_PORT = 39123;
export const AGENT_RPC_ACTIONS = [
    'health',
    'list_platforms',
    'list_accounts',
    'create_post',
    'update_post',
    'publish_post',
    'get_job_status',
    'cancel_job',
    'render_wechat_html',
];
export const AGENT_ERROR_CODES = [
    'extension_unavailable',
    'default_account_not_configured',
    'post_not_found',
    'job_not_found',
    'unsupported_platform',
    'validation_error',
    'internal_error',
];
