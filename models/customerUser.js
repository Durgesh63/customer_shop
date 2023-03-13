import mongoose from "./dbConnection.js";

const checkVaoidEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email);
}


// create schema for customer 
const customerSchema = new mongoose.Schema({
    name : String,
    mobileno : {
        type     : Number,
        required : true,
        unique   : true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
          }
    },
    anothermobile : Number,
    email:{
        type:String,
        validate : {
            validator : checkVaoidEmail,
            message   : '{VALUE} is not an valid email address'
          }
    },
    city:String,
    pincode:Number,
    address:String,
    pswd:{
        type: String,
        required: true,
    }

})

// Collection creations 
const Customer_user = new  mongoose.model("user",customerSchema)

export default Customer_user