import debug from 'debug';

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
export const secret = process.env.SECRET || 'secret';

export const info = debug('file-upload-api:info');
export const error = debug('file-upload-api:error');

export const uploadDir = process.env.UPLOAD_DIR || 'upload';
