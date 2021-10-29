const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
mongoose
  .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/wines`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('DB is connected'))
  .catch(() => console.error('DB is not connected'))
