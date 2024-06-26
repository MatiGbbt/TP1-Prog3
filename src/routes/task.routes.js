import {Router} from 'express'
import {getTask,getTasks,createTask, updateTask, deleteTask} from '../controllers/task.controller.js'
import {authRequire} from '../middlewares/jwt.js'

const router =  Router()

router.get('/getTasks', getTasks)

router.get('/getTask/:id', getTask)

router.post('/createTask', authRequire, createTask)

router.put('/updateTask', updateTask)

router.delete('/deleteTask', deleteTask)

export default router