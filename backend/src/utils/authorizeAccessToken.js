const { expressjwt: jwt } = require('express-jwt');
const jwks = require('jwks-rsa');

exports.authorizeAccessToken = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://mercadodeenanos.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'auth',
  issuer: 'https://mercadodeenanos.us.auth0.com/',
  algorithms: ['RS256'],
});

exports.checkPermissions =
  (permissions, checkAll = false) =>
  (req, res, next) => {
    try {
      const authorizations = req.auth.permissions;
      if (checkAll) {
        for (let i = 0; i < permissions.length; i++) {
          if (!authorizations.join(' ').includes(permissions[i])) {
            return res
              .status(403)
              .json({
                status: 403,
                message: 'No authorization token was found',
              });
          }
        }
        return next();
      } else {
        for (let i = 0; i < authorizations.length; i++) {
          if (authorizations.includes(permissions[i])) return next();
        }
        return res
          .status(403)
          .json({ status: 403, message: 'No authorization token was found' });
      }
    } catch (error) {
      console.log(error);
    }
  };
