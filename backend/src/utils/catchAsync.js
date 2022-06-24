// para esto podemos crear una funcion para manejar todos los catch de los try/catch
// hicimos un archivo aparte que exporte esta función para tener el proyecto ordenado
// como sabemos las funciones async nos devuelven una promesa, por lo tanto pasamos por
// parametro una funcion, luego retornamos otra funcion la cual tomará la funcion del
// parametro y hará el .catch() para manejar los errores
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
