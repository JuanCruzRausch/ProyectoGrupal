const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const app = require("./src/app");

const DB = process.env.database.replace("<password>", process.env.passwordDB);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log("Conectado a la base de datos"))
  .catch((err) => {
    throw err;
  });

const port = process.env.port || 5050;

const server = app.listen(port, () => {
  console.log(`Aplicacion corriendo en el puerto ${port}...`);
});
