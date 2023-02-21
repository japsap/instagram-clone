const express = require('express');
const cors = require('cors')
const routes = require('./routes');
const coockieParser = require('cookie-parser');
const initDatabase = require('./config/initDatabase');


const PORT = 5000;
const app = express();

app.use(express.urlencoded({ extended : true }))
app.use(coockieParser());
app.use(express.json());
app.use(cors());
app.use(routes);


initDatabase()
    .then(() => app.listen(PORT, () => console.log(`Server has started on: http://localhost:${PORT}`)))
    .catch((err) => console.log(err.message));
