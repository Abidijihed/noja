const {connection} = require('../database-mysql/config.js');
const crypto = require('crypto');
const middleware = require('../middleware/auth');
const utils=require('../middleware/util')
const session=require ('../models/session');
const { query } = require('express');
module.exports={
    CreateAdmin:((req,res)=>{
        var passwordHashed = crypto.createHash('sha256').update(req.body.Password, 'utf8').digest('hex')
        let query=`SELECT * from admin where Email="${req.body.Email}"`
        connection.query(query,(err,results)=>{
     if(err){
       res.status(500).send(err)
     }else if((results.length>0 &&results[0].Email===req.body.Email)) {
       res.status(200).send("user exist")
     }else if(!results.length && results===undefined){
       res.status(202).send("chek somthing went wrong!")
     }else{
        const query=`INSERT INTO admin (FirstName,LastName,Email,password,PhoneNumber,Signin) VALUES ("${req.body.FirstName}","${req.body.FirstName}","${req.body.Email}","${passwordHashed}","${req.body.PhoneNumber}",${Signin})`
          connection.query(query,(err,result)=>{
          if(err){
            res.status(500).send(err)
          }else{
            res.status(200).send('admin added')
          }

          })
        }
    })
    }),

    GetAdmin:((req,res)=>{
           const query=`SELECT * FROM admin`
           connection.query(query,(err,result)=>{
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(result)
            }
           })
    }),
    

    AthPages:((req,res)=>{
             let query=`INSERT INTO pages (students_id,Signin) VALUES (${req.params.students_id},${req.body.Signin})`
             connection.query(query,(err,result)=>{
                if(err){
                    res.status(500).send(err)
                }else{
                    res.status(200).send('Signin is authed')
                }
             })
    }),
    Verityadmin :(req,res)=>{
        var passwordHashed = crypto.createHash('sha256').update(req.body.Password, 'utf8').digest('hex')
        
        // var repeatepasswordHshed=crypto.createHash('sha256').update(req.body.repeatepassword, 'utf8').digest('hex')
        const query=`SELECT * from admin where Email="${req.body.Email}"`
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
}