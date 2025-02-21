// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// const API_KEY = process.env.API_KEY;

// app.use(express.json());

// app.post('/webhook', (req, res) => {
//     if (req.headers['api-key'] !== API_KEY) {
//         return res.status(403).send('Forbidden');
//     }

//     console.log('Payload recibido:', req.body);
//     io.emit('newMessage', req.body); // Emitir evento cuando se recibe un mensaje
//     res.status(200).send('Evento recibido');
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`Servidor escuchando en el puerto ${PORT}`);
// });
