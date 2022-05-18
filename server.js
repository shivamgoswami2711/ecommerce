const app = require('./app')
const dotenv = require('dotenv');
const database = require('./config/database');

dotenv.config({ path: "./config/config.env" });
database();
app.listen(process.env.PORT, () => console.log(`server started http://localhost:${process.env.PORT}`));
