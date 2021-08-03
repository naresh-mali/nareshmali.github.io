require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`Connected to MongoDB...`))
    .catch(err => console.log(err))

const Contact = require('./contact.model')

app.get('/', (req, res) => {
    res.redirect('https://nareshmali.github.io')
})

app.get('/api', (req, res) => {
    res.status(200).send(`API server up and running...`)
})

app.get('/download', (req, res) => {
    const file = `${__dirname}/public/Resume.pdf`
    res.download(file)
})

app.get('/api/contact', async (req, res) => {
    if (req.headers['authorization'] != process.env.AUTH_TOKEN) return res.json({ status: 401, message: 'Access Denied' })
    try {
        const contacts = await Contact.find()
        res.status(200).json({ status: '200', message: 'List of all the forms', data: contacts })
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
})

app.post('/api/contact', async (req, res) => {
    if (req.body.name == '' || req.body.email == '' || req.body.message == '' || !req.body.name || !req.body.email || !req.body.message)
        return res.status(400).json({ status: '400', message: 'Must enter name, email and message fields!' })
    try {
        await Contact.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        res.status(201).json({ status: '201', message: 'Submitted Successfully' })
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
})

app.listen(PORT, () => console.log(`${process.env.NODE_ENV != 'production' ? 'Development' : 'Production'} Server started on port ${PORT}...`))