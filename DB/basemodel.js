const {find,findonee,Delete,update,insert,findoneeperson} = require("./base.js")
const {ObjectId} = require("mongodb")

class Collection 
{
     name_of_collection = "usersss"  ; 


     insertdata(data) 
    {   try{
        return insert(this.name_of_collection,data);
    } catch(error)
    
    {
        return null;
    }
    }

   

    findData(data)
    { 
        try{
        return find(this.name_of_collection,data)
    } catch(error)
    
    {
        return null;
    }
    }

    findOneData(data)
    { 
        try{
        //    console.log(data);
        return findoneeperson(this.name_of_collection,data)
    } 
    catch(error)
    
    {
        return null;
    }
    }

    DeleteData(id)
    {  
        
        try {
            return Delete(this.name_of_collection,ObjectId(id));
        }
        catch (error) {
            return null;
        }
    }

    Updateone(id,data)
    {  
        
        try {
           
            return update(this.name_of_collection,ObjectId(id),data);
        }
        catch (error) {
            return null;
        }
    }
     
}



    module.exports = {Collection}