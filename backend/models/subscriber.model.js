import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
   email:{
     type: String,
     required: true,
     unique: true
   }
},{
    timestamps: true
})


const Subscriber = mongoose.model('Suscriber', subscriberSchema);

export default Subscriber;