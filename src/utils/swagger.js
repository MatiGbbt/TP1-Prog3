import swaggerAutogen from 'swagger-autogen'

import config from '../config.js'

const doc = {
  
  info: {
    title: 'PIII - test',
    description: 'Aplicacion inicial de backend',
  },
   host: 'localhost:' + config.port
};

const outputFile = '../../swagger-output.json'
const routes = [
  "src/routes/auth.routes.js",
  "src/routes/task.routes.js"
];

swaggerAutogen(outputFile, routes, doc)