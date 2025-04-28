require('dotenv').config()
const express = require('express')
const { stat } = require('fs')
const app = express()

// middleware
app.use(express.json())

// get a default endpoint

app.get('/', (req, res) => {
    return res.json({ message: "You've hit the GET / endpoint!" })
})

// Get list of users
app.get('/users', (req, res) => {
    return res.json([{ id: 1, name: "Ingvild" }, { id: 2, name: "Kristin" }, { id: 3, name: "Inka" }])
})

// Add a user
app.post('/users', (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({ message: "Error! Name must not be empty." })
    }

    return res.status(201).json({ message: "New user created!", data: { id:4, name } })
})

// Add a user
app.post('/users/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({ message: "Error! A valid user ID needs to be present." })
    }

    // Hardcoding in the new user
    return res.status(200).json({ id: req.params.id, name: "Espen" })
})

// Hardcoding car colors
app.get('/cars', (req, res) => {
    res.status(200).json([{ id: 1, color: "Blue" }, { id: 2, name: "Red" }, { id: 3, name: "Yellow" }])
})

// Setting up port...
const port = process.env.APP_PORT || 3000

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})