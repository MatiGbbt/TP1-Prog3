import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {

    try {

        const options = {
            page: 1,
            limit: 3,
            populate: 'user'
        }

        const tasks = await Task.paginate({"user": req.user.id}, options)
        res.json(tasks)
    } catch (error) {

        res.status(500).json({message: error.message})

    }
}

export const createTask = async (req, res) => {

    try {

        const {title, description, date} = req.body

        const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
        })

        const savedTask = await newTask.save()
        res.json(savedTask)
        
    } catch (error) {

        res.status(500).json({message: error})

    }
}

export const getTask = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id).populate('user')
        if (!task) return res.status(404).json ; res.json(task) 

    } catch (error) {

        res.status(500).json({message: error.message})

    }
}