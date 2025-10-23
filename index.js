const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('.routers/authRouter.js');
const productRouter = require('./routers/productRouter')

const PORT = process.env.PORT || 5000

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/api", productRouter);

app.get('/api', (req, res) => {

    res.status(200).json("Сервер работает")

})


const start = async () => {

    try {
        await mongoose.connect('mongodb://localhost:27017/backend');
        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
    } catch (e) {
        console.log("Ошибка при запуске сервера", e)
    }

} 


start()