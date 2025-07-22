const express = require ('express');
const app = express();
const env = require('dotenv').config();
const path = require('path');
const userRouter = require('./routes/userRouter');
const db = require("./config/db");
db()

app.use(express.json())

app.use(express.urlencoded({ extended: true}));

app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, 'views/user'),path.join(__dirname, 'views/admin')]);



app.use(express.static(path.join(__dirname, 'public')));

/*app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});*/

app.use('/', userRouter);


const PORT =4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
