const adminMiddleware = (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({ message: 'Access denied. User is not an Admin' });
    }
    next();
  };
  
  module.exports = adminMiddleware;
  