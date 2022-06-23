// este constructor de errores que extiende de Error (JS) admite un mensaje y un status code
class AppError extends Error {
  constructor(message, statusCode) {
    // le pasamos message en super como parent constructor porque es lo que va a tomar el error
    super(message);

    // tomamos statusCode
    this.statusCode = statusCode;
    // si el statusCode empieza con 4 quiere decir que es un fallo del usuario, pero si empieza con otro, como por ejemplo 500, significa que es error de servidor
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    // operational error hace referencia a los errores que ocurren si querer, como por ejemplo no rellenar bien un formulario
    this.isOperational = true;

    // stack trace es una informacion que nos dice donde ocurre el error y se captura con error.captureStackTrace()
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
