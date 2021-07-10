import "reflect-metadata"
import express from 'express';
import 'express-async-errors'
import {Request, Response, NextFunction} from 'express'

import './database'
import {routes} from './routes'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(routes)

//GOSTEI DISSO!
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({err: err.message})
    }

    return res.send(500).json({
        status:  'error',
        message: "Internal Server Error"
    })
})

app.listen(PORT, ()=>{console.log('sever running at port '+PORT);})