import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    address:{
        type:String,
        required:true,
        unique:true
    },
    balance:{
        type:Number,
        default:0
    }
    // add other field as needed
});


const addressModel = mongoose.model("Address", addressSchema);
export default addressModel;