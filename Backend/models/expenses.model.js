import mongoose from 'mongoose';

const expensesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    reason:{
        type: String,
        required: true,
    }
},{
    timestamps: true
})


const Expenses = mongoose.model('Expenses', expensesSchema);

export default Expenses;