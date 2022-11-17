const express = require("express")
const app = express();
const adminapp = express();
const bodyParser = require('body-parser');
const {UserController} = require("./controller/usersController")

const auth = require("./middleware/authen");





let usercontroller = new UserController();






//list the data
adminapp.get("/user",usercontroller.list)
//delete the data using the ID 
adminapp.delete("/user/:id",usercontroller.deletefrombrowser)
//updating the data using  ID 
adminapp.put("/user/:id",app.use(bodyParser.json()),usercontroller.update_from_browser)
// insert the data into database 
adminapp.post("/user",app.use(bodyParser.json()),usercontroller.insertfrombrowser)
adminapp.get("/user/:id",usercontroller.listone)

//////////*************** */

adminapp.get("/login",auth,usercontroller.Login)
adminapp.get("/resgist",usercontroller.Resgist)







 
app.use("/admin/",adminapp)






app.listen(3000,function()
{
    console.log("server running");
}
);
