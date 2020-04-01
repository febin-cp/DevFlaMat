const express = require ('express');
const connectDB = require ('./config/db')

const app = express();

connectDB();

app.get('/', (req,res)=> res.send('API Running'));
app.use('/api/auth', require('./routes/apis/auth') )

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on ${PORT}`));