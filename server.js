import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

io.on('connection', (socket) => {
  console.log('Device connected:', socket.id)

  socket.on('chat:message', (text) => {
    if (typeof text !== 'string') return

    const message = text.trim().slice(0, 2000)
    if (!message) return

    io.emit('chat:message', {
      id: socket.id,
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    })
  })

  socket.on('disconnect', () => {
    console.log('Device disconnected:', socket.id)
  })
})

httpServer.listen(3000, '0.0.0.0', () => {
  console.log('WebChat server running on port 3000')
})
