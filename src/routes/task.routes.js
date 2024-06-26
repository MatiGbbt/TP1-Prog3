import {Router} from 'express'
import {getTask,getTasks,createTask, updateTask, deleteTask} from '../controllers/task.controller.js'
import {authRequire} from '../middlewares/jwt.js'

const router =  Router()

router.get('/getTasks', authRequire, getTasks)

router.get('/getTask/:id', authRequire, getTask)

router.post('/createTask', authRequire, createTask)

router.put('/updateTask/:id', authRequire, updateTask)

router.delete('/deleteTask/:id', authRequire, deleteTask)

export default router