require('dotenv').config()
const express = require('express')
const app = express

// middleware
app.request(express.json())

app.get('/', (req, res) => {
    return res.json({ message: "You've hit the GET / endpoint!" })
})

app.get('/users', (req, res) => {
    return res.json([{ id: 1, name: "Ingvild" }, { id: 2, name: "Kristin" }, { id: 3, name: "Inka" }])
})

app.post('/users', (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({ message: "Error! Name must not be empty." })
    }

    return res.status(200).json({ message: "New user created!", data: { id:4, name } })
})

app.post('/users/:id', (req, res) => {
    if (!req.params.id) {

    }
})