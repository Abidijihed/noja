const {connection} = require('../database-mysql/config.js');
const crypto = require('crypto');
const middleware = require('../middleware/auth');
const utils=require('../middleware/util')
const session=require ('../models/session')

module.exports={
 CreateStudent:((req,res)=>{
    let passwordHashed=crypto.createHash('sha256').update(req.body.Password, 'utf8').digest('hex')
    let query=`SELECT * from students where Email="${req.body.Email}"`
     connection.query(query,(err,results)=>{
  if(err){
    res.status(500).send(err)
  }else if((results.length>0 &&results[0].Email===req.body.Email)) {
    res.status(200).send("user exist")
  }else if(!results.length && results===undefined){
    res.status(202).send("chek somthing went wrong!")
  }else{
    let query=`INSERT INTO students(FirstName,LastName,Email,Address,PhoneNumber,Skills,Password,image,country,Zip,creatAt,originpassword) VALUES("${req.body.FirstName}","${req.body.LastName}","${req.body.Email}","${req.body.Address}","${req.body.PhoneNumber}","${req.body.Skills}","${passwordHashed}","${req.body.image}","${req.body.country}","${req.body.Zip}","${req.body.creatAt}","${req.body.Password}")`
    connection.query(query,(err,results)=>{
      if(err){
        res.status(500).send(err)
      }else{
        res.status(200).send("user created")
      }
      let query=`INSERT INTO adminnotfication(students_id,message,date,new) VALUES("${results.insertId}","${req.body.Email}","${req.body.creatAt}",${true})`
      connection.query(query,(err,result)=>{
           if(err){
            res.status(501).send(err)
           }else{
            res.status(201).send('user join')
           }
      })
    
    })
    
  }
   
    })
}),
getnotificationadmin:((req,res)=>{
const query='SELECT * FROM adminnotfication'
connection.query(query,(err,result)=>{
if(err){
  res.status(500).send(err)
}else{
  res.status(200).send(result)
}
 
})
}),


  VerifyStudent :(req,res)=>{
    var passwordHashed = crypto.createHash('sha256').update(req.body.Password, 'utf8').digest('hex')
    
    // var repeatepasswordHshed=crypto.createHash('sha256').update(req.body.repeatepassword, 'utf8').digest('hex')
    const query=`SELECT * from students where Email="${req.body.Email}"`
    connection.query(query,(err,results)=>{
      if(err){
        res.status(500).send(err)
      } else if(results.length>0 && results[0].Password===passwordHashed ){
       var session=utils.RandomString(32)
        middleware.CreateSession(req,res,results[0].id,session)
      }else if(results.length===0 || results[0].Password!==passwordHashed  ){
             res.status(200).send('somthing went wrong')
      }else{
        res.status(404).send("not fund")
      }
    })
  },
  logout:(req,res)=>{
    session.delete(req.cookies.noja)
    .then((result)=>{
 res.status(200).send('user loget out')      
   })
    .catch((err)=>{
      res.status(500).send('server err')
    })
  
}
}











