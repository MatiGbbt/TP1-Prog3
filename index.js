//Inicializa el servidor

import app from './src/app.js'
import { connectDB } from './src/db.js'

const port = app.get("port")

connectDB()
app.listen(port)

console.log('Servidor escuchando en el puerto: ', port)