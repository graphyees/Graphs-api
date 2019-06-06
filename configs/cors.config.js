const createError = require('http-errors');
const cors = require('cors');

const allowedOrigins = ["http://localhost:8080"];

module.exports = cors({
  origin: (origin, next) => {
    const allowed = !origin || allowedOrigins.indexOf(origin) !== -1;
    if (allowed) {
      next(null, allowed);
    } else {
      next(createError(401, 'You are not allowed'));
    }
  },
  credentials: true
});