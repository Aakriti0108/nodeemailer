const express = require ('express')
const bodyParser = require ('body-parser')
const nodemailer = require('nodemailer')

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

function sendEmail()
{
    return new Promise((resolve,reject)=>{
        let transporter = nodemailer.createTransport({
            service : 'gmail',
            auth: {
              user: `neerajdaakriti@gmail.com`, // generated ethereal user
              pass: `zxqibtqaciutozzi`, // generated ethereal password
            },
          });

          const msg = {
            from: 'neerajdaakriti@gmail.com', // sender address
            to: `bhavyaarora105@gmail.com`, // list of receivers
            subject: "idesign.market", // Subject line
            text: "congraulations for joining idesign.market", // plain text body,
          }
    
          transporter.sendMail(msg, function(error,info){
            if(error){
                console.log(error)
                return reject({message:`An error occured`})
            }
            return resolve({message:"email sent"})
          })
    })

    
}

app.get('/',(req,res)=>{
    sendEmail()
    .then(response=>{
        res.send(response.message)
    })
    .catch(error=>{
        res.status(500).send(error.message)
    })
})



app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})