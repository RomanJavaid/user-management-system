const mongoose=require('mongoose')



const connectDB=async()=>{
    try{
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
      console.log("Mongodb connected");
    }catch(err){
        console.log(`Error during mongodb connection ${err}`);
    }
}


module.exports=connectDB;