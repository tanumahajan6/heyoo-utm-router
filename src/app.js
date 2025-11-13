import express from 'express'
import dotenv from 'dotenv'
import logger from './logger.js'
import redirectRoute from '../routes/redirect.js'

dotenv.config()
const app = express()

app.use(logger)
app.use("/", redirectRoute)


const PORT = process.env.PORT || 3000
app.listen(PORT)