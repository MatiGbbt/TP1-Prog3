//Conexión a la base de datos MongoDB

import mongoose from 'mongoose'
import config from './config.js'

export const connectDB = async () => {
    
    try {

        const conn = await mongoose.connect(config.mongodb_uri)
        
        console.log('Conexión Exitosa!')
        console.log('Base de datos:', conn.connection.db.databaseName)

    } catch (error) {

        console.log(error)

    }
}