//Configuración del servidor

//dependencias
import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import config from './config.js'

//swagger (documentación)
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger-output.json' assert { type: 'json' }

//rutas
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'


const app = express()

//settings
app.set("port", config.port)

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors())
//

app.use('/api',authRoutes)
app.use('/api',taskRoutes)

//swagger (documentación)
var options = {
    explorer: true
  };
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,options))

export default app