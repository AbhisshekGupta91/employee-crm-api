require('dotenv').config();
require('./config/DB')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const path = require('path');
const emplooyeeRoute = require('./routes/employeeRoute')


const app = express()

const PORT = process.env.PORT || 5100
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }));
app.use(cors())

app.use('/api/employee', emplooyeeRoute);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})