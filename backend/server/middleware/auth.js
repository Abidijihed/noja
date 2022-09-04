const models = require('../models/session')
module.exports={
    CreateSession:((req,res,students_id,session)=>{
        models.post(students_id,session)
        .then((result)=>{
            res.cookie("noja",session,{
                path: '/',
                expires: new Date(new Date().getTime() + 86400 * 1000),
                httpOnly: false,
                noja: false
            }).send([session,"secsuss",students_id])
        })
        .catch((err)=>{
           res.send(err)
        })
    }),
    VerifySession:(req,res,next)=>{
        if(req.cookies.noja){
            models.Get(req.cookies.noja)
            .then((result)=>{
                if(result.length>0&&(result[0].date>Date.now())){
                    var registerInfo={
                        students_id:result[0].students_id,
                        session:result[0].session,
                    }
                    res.status(200).send(registerInfo)
                }else{
                    res.status(200).send('seesion login fail')
                }
            })
            .catch((err)=>{
                res.status(500).send(err)
            })
        }else{
            res.status(200).send('session login fail')
        }
    }
}