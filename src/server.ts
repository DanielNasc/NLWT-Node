import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('dedfef')
})

app.listen(PORT, ()=>{console.log('sever running at port '+PORT);})