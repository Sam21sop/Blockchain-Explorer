import mongoose from "mongoose";


const alertSchema = mongoose.Schema({
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address'
    },
    message:{
        type:String,
        rquired:true
    },
});

const alertModel = mongoose.model('Alert', alertSchema);
export default alertModel;