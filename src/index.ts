import express from 'express';

const app = express();

app.get('/', (req, res) => { 
    res.send('listening');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})