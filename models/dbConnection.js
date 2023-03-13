import mongoose from "mongoose";


// mongodb database connections 

mongoose.connect('mongodb://admin:admin@localhost:27017/customer?authSource=admin',{useNewUrlParser:true,useUnifiedTopology:true})
.then((res)=>{
    console.log("connection success");
})
.catch((error)=>{
    console.error(error)
});

export default mongoose;

