const mongo  = require("mongodb");

const {ObjectId} = require("mongodb")
const Mongoclient = mongo.MongoClient

const url = "mongodb://localhost:27017";

// function Mongoconnect(url)
// {
//     return new Promise((res,rej)=>
//     Mongoclient.connect((url,function(error,db)
//     {
//         if(error){
//         console.log("error happened")
//         return rej(error)
//         }
//         else 
//         {
//         res(db)
//         close(db)
//         }
//     }
//     ))
    
//     )
// }


//this function is for the connection of the data base 
function MongoConnect(url) {
    return new Promise((resolve, reject) => {
        Mongoclient.connect(url, function (error, db) {
            if (error)
                return reject(error)
            resolve(db)
            // db.close()
        })
    });
}






//this function is for inserting the data into data base 

function insert(collectionName, data) {
    return new Promise((resolve, reject) => {
        MongoConnect("mongodb://localhost:27017")
            .then(db => {
                const dbo = db.db("ecommerce")
                dbo.collection(collectionName).insertOne(data, function (error, result) {
                    if (error)
                        return reject(error)
                    resolve(result)
                    db.close()
                })
            })
    })
}



function find(collectionName,filter={})
{
    return new Promise((resolve,reject)=>
 {   
    MongoConnect(url).then((db) =>
    {
        const DBO = db.db("ecommerce")
        DBO.collection(collectionName).find(filter).toArray(function(error,result)
        {
            if(error)
                reject(error)
            resolve(result)
            // console.log(result)
            db.close()    
        }
    
    
        )}
 
 
 )}
)}


    function findonee(collectionName,id)
    {
        return new Promise((resolve,reject)=>
     {   
        MongoConnect(url).then((db) =>
        {
            const DBO = db.db("ecommerce")
            
            DBO.collection(collectionName).findOne({_id:ObjectId(id)},function(error,result)
            {
                if(error)
                    reject(error)
                resolve(result)
                // console.log(result)
                db.close()    
            }
        
        
            )}
     
     
     )}
    )}  


    function findoneeperson(collectionName,filter={})
    {
        return new Promise((resolve,reject)=>
     {   
        MongoConnect(url).then((db) =>
        {
            const DBO = db.db("ecommerce")
            
            DBO.collection(collectionName).findOne(filter,function(error,result)
            {
                if(error)
                reject(error)
            resolve(result)
            // console.log(result)
            db.close()    
                  
            }
        
        
            )}
     
     
     )}
    )}  
    
function update(collectionName,id,newfilter={})
{
    return new Promise((resolve,reject)=>
    MongoConnect(url).then((db)=>
    {
    const DBO = db.db("ecommerce");
//    var oldquery={age:18}
//    var newdata={age:222}
    DBO.collection(collectionName).updateOne({_id:ObjectId(id)},{$set:newfilter},function(result,error)
   {
    try{
        resolve(result)
    db.close()
    }
    catch(error)
    {
         return reject(error)}
    
   }

    )}
    )
    )
}


function Delete(collectionName,id)
{
    return new Promise((resolve,reject)=>
    MongoConnect(url).then((db)=>
    {
    const DBO = db.db("ecommerce");
//    var oldquery={age:18}
//    var newdata={age:222}
    DBO.collection(collectionName).deleteOne({_id:ObjectId(id)},function(result,error)
   {
    try{
        resolve(result)
        db.close()
    } catch(error)
    {
        reject(error)
        
    }
   
   }

    )}
    )
    )
}




function newCollection(name)
{
    return new Promise((resolve,reject)=>
    MongoConnect("mongodb://localhost:27017").
    then((db)=>{
    const DBO = db.db("ecommerce")
    DBO.createCollection(name,function(error,result)
    {
        if(error)
        {
            console.log(error,"Errorrr")

        }
        else {
            console.log(result,"Successful connection ")
        }
    }
    )
})
    
    )
}

// newCollection("usersss")
// insert("usersss",{name:"ibrahima cone",age:"23"})



//  find("usersss")
// findonee("usersss",{name:"osama"})
// update("usersss",{name:"omarrrrrrrr"},{name:"abdo"})
// Delete("usersss",{name:"abdo"})


module.exports = {find,findonee,Delete,update,insert,findoneeperson}





