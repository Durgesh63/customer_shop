import mongoose from "mongoose";


// mongodb database connections 

// mongoose.connect('mongodb://admin:admin@localhost:27017/customer?authSource=admin',{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connect('mongodb+srv://admin:admin@customer.nwim3y6.mongodb.net/customer?authSource=admin',{useNewUrlParser:true,useUnifiedTopology:true})
.then((res)=>{
    console.log("connection success");
})
.catch((error)=>{
    console.error(error)
});

export default mongoose;

