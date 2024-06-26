//Inicializa el servidor

import app from './src/app.js'
import { connectDB } from './src/db.js'

const port = app.get("port")

connectDB()
app.listen(port)

app.get("/", (req, res) => {
    res.send('Hola Sergio. Deploy Funcionando :D')
})

console.log('Servidor escuchando en el puerto: ', port)