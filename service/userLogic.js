const {Collection} = require("../DB/basemodel.js")

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const {ObjectId} = require("mongodb")




class UserLogic
{

    insert(data)
    {
        var collection = new Collection();

        return collection.insertdata(data);
    }


 

    listusers()
    {

       var  collection = new Collection();


       return collection.findData()
    }




    async registeration(name,password,email)
    {
        let collection = new Collection();

        if(!(password&&email&&name))
        {
            return {status: 400, message: "please these information are required"}
        }

        let user = await collection.findOneData({email})
       
        if(user)
        {
            return {status:409, message:"User Already Exist. Please Login"}
        }
         


       let encryptedPassword = await bcrypt.hash(password, 10);

        const newuser = await collection.insertdata({name,encryptedPassword,email})

        const token = jwt.sign(
            { _id: newuser._id, email },

            "secret",
            {
              expiresIn: "2h",
            }
          );
          // save user token
          newuser.token = token;




         return {status:201, message:newuser}



    }




  async  login(email,password)
    {
        let  collection = new Collection();

        let user = await collection.findOneData({email});
        
        // console.log(user1);
        console.log(password.toString());
        if(!user)
        {return {status: false, message: "user not found"};
            
        }
        else if(user &&  bcrypt.compare(password.toString(),user.encryptedPassword))
        {
            const token = jwt.sign(
                { user_id: user._id, email },
               "secret",
                {
                  expiresIn: "2h",
                }
              );
        
              // save user token
              user.token = token;
                console.log(user.token);
              return {status:200,user}
        }


        return {status:400,message:"Invalid Credentials"}

        
        


    
    }







    deleteData(data)
    {
        var  collection = new Collection();
        return collection.DeleteData(data);
    }

    updateData(id,data)
    {
        var  collection = new Collection();
        // console.log(data)
        return collection.Updateone(id,data);
    }








}

module.exports = {UserLogic}