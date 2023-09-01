import express from 'express'
const app = express()
import {UserInput} from 'common'


app.post("/", (req,res) => {
    const user = UserInput.safeParse(req.body);
    
})
app.listen(3014, () => {
    console.log("app listening")
})