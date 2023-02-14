const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
<<<<<<< HEAD
  signToken: function ({ firstName, email, _id, adminAccess = false }) {
    const payload = { firstName, email, _id, adminAccess };
=======
  signToken: function ({ firstName, lastName, email, _id }) {
    const payload = { firstName, lastName, email, _id };
>>>>>>> 64ead144608e8364fce72c8adad58338df448034

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
