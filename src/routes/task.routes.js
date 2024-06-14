import {Router} from 'express'
import {getTask,getTasks,createTask} from '../controllers/task.controller.js'
import {authRequire} from '../middlewares/jwt.js'

const router =  Router()

router.get('/getTasks', authRequire, getTasks)

router.get('/getTask/:id', authRequire, getTask)

router.post('/createTask', authRequire, createTask)

export default router