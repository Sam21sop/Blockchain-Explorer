import express from 'express';
import cors from 'cors';
import addressRouter from './routes/addressRouter.js';
import alertRouter from './routes/alertRoutes.js';


const server = express();

// middleware
server.use(cors())
server.use(express.json());

server.use('/api/address', addressRouter);
server.use('/api/alert', alertRouter);

server.get('/', (req, res) => {
    res.send("Hello Developers..!")
});

export default server;