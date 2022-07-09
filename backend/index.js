const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {Server} = require('socket.io')
dotenv.config({ path: "./.env" });
const app = require("./src/app");
const cors = require("cors")

app.use(cors)


// const http = require("http");
// const serverIO = http.createServer(app)
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

const io = new Server(server,{cors:{origin:"*", method:["GET","POST"]}})

io.on("connection", (socket)=>{
  console.log("user connected")
  
  socket.on("comentarios", (data)=>{
    console.log(`usuario ${socket.id} envió ${data.data}`)
    socket.broadcast.emit("envio_front", data)
    socket.emit("envio_front", data)
  })
  socket.on("join_room", (room)=>{
    
    // socket.join(room)
    console.log(`usuario con id ${socket.id} se unió a la sala ${room} `)
  })
  
  socket.on("disconnect", ()=>{
    console.log("user is disconected")
  })
})





