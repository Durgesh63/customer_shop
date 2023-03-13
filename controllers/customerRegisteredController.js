import Customer_user from '../models/customerUser.js';

// add customer user
const addUser = (user) =>{
    const AddCustomer = new Customer_user(user)
    return AddCustomer.save()
    
}

// add customer 
const customerRegistered = (req,res)=>{
    // insert a document into customer
    addUser({
        name : req.body.name,
        mobileno : req.body.mobileno,
        anothermobile : req.body.anothermobile,
        email:req.body.email,
        city:req.body.city,
        pincode:req.body.pincode,
        address:req.body.address,
        pswd:req.body.pswd
    })
    .then(
        (resp) => {
            res.send({customer_registerd:resp})
        }
    )
    .catch(err => {
        res.send({customer_registerd:err.message})
        
    });
        
}

export default customerRegistered