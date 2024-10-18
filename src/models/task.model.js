import mongoose from 'mongoose'
import mongoseePaginate from 'mongoose-paginate-v2'

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    },
    user: {
        type: String,
        ref: 'user',
        required: true
    },
},{
    timestamps: true
})

taskSchema.plugin(mongoseePaginate)

export default mongoose.model('task', taskSchema)
