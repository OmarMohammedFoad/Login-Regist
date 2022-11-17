const {UserLogic} = require("../service/userLogic.js")

class UserController 
{

    async insertfrombrowser(req,res)
    {
        const {name,password,phone,email} = req.body
        // console.log(name,phone,email,password)
        var userlogic =  new UserLogic();
        
        res.json (
            {
            users : await userlogic.insert({name,phone,password,email}) 
           }
        )
    }


    async Login(req,res)
    {
        const email = req.body.email;
        const password = req.body.password
        
      
     
        var userlogic =  new UserLogic();

     let msg = await  userlogic.login(email,password)
       
        
        res.json({
           msg  , 
        })
    }

    
    async Resgist(req,res)
    {
        const name = req.body.name;
        const password = req.body.password;
        const email = req.body.email;
     

        var userlogic =  new UserLogic();

     let msg =  await userlogic.registeration(name,password,email)
       
        
        res.json({
           msg  , 
        })
    }


   async list(req,res)
    {
        var userlogic = new UserLogic();
    res.json({
    list : await userlogic.listusers()})
    }

    async listone(req,res)
    {
        var id = req.params
        // console.log(id);
        var userlogic = new UserLogic();
    res.json({
    list : await userlogic.insertone(id)})
    }

    async deletefrombrowser(req,res)
    {
        const {id} = req.params;
        console.log(id)
        var userlogic = new UserLogic();
        res.json(
            {
     product :   await userlogic.deleteData(id)
            })
    }



    async update_from_browser(req,res)
    {
    const {id} = req.params

    // console.log(id)
    const {name,age} = req.body
    // console.log({name,age})
    //  console.log(name,age)
    var userlogic = new UserLogic();
    res.json({
    product  :       await userlogic.updateData(id,{name,age})

    })
    }
}

module.exports = {UserController}