
/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports middleware
 * @namespace middleware
 */

/**
 * Middleware que verifica si el usuario es un administrador.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @param {Function} next - Función de middleware para pasar el control al siguiente middleware.
 * @returns {void}
 */
const isAdmin = (req, res, next) => {
  const user = req.user; // Suponiendo que `req.user` está poblado por un middleware de autenticación
  if (user && user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Acceso denegado' });
};

module.exports = isAdmin;
