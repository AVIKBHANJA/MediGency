import {app} from './App.js'

app.get("/",(req,res)=>{
    res.send('server is ready'); 
})
