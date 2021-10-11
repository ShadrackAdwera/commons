const HttpError = require('./error/httpError');
const checkAuth = require('./middlewares/checkAuth');

exports.HttpError = HttpError;
exports.checkAuth = checkAuth;