import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
console.log('hola:', socket)
export default socket;