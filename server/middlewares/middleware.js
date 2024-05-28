const isAdmin = (req, res, next) => {
    const user = req.user; // Assuming `req.user` is populated by an authentication middleware
    if (user && user.role === 'admin') {
      return next();
    }
    return res.status(403).json({ message: 'Access denied' });
  };
  
  module.exports = isAdmin;
  