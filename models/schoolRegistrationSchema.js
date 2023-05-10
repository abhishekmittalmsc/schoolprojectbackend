import mongoose from 'mongoose';

const schoolRegistrationSchema = mongoose.Schema({
    schoolName: String,
    schoolAddress: String,
    pin: Number,
    city: String,
    state: String,
    country: String,
    phoneNumber:Number,
    personName:String,
    status:{
        type:String,
        default:"unattended"
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var schoolRegistration = mongoose.model('schoolRegistration', schoolRegistrationSchema);

export default schoolRegistration;

