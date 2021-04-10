require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')
const { reset } = require('nodemon')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))
app.use('/api', require('./routes/paymentRouter'))



// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Welcome hamza to MongoDB ! Connected !!')
})

app.get('/', (req,res) => {
    res.json({msg: "Welcome to chaos i am fed up and i am gonna kill that motherfuckers Dizaster !"})
})


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('react-pfa/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'react-pfa', 'build', 'index.html'))
    })
}


// const connection  = mongoose.connection;
// connection.once('open', () => {
//     // console.log("MongoDB database connection established successfully");
//     console.log("3ak3ek halla m3ak !!!")
// });

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})