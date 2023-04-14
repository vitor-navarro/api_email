require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser')

var helmet = require('helmet');

const cors = require('cors')
const corsOptions = {
    origin: process.env.ENABLED_CORS
}

const emailsRoutes = require("./emails")


app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//cors
app.use(cors(corsOptions))
app.use(bodyParser.json())

//arquivos estáticos
app.use(express.static("public"))

//security
//app.use(helmet());

app.use("/emails", emailsRoutes)

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
    });