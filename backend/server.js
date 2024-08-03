require('dotenv').config();
const express = require('express');
const router = require('./src/routes/user.router');
const products = require('./src/routes/AllProducts.router');
const adminRouter = require('./src/routes/admin.router');
const connectDb = require('./src/db/db');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth', router);
app.use('/api/data', products );
app.use("/api/admin",adminRouter);

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
    });
}).catch(error => {
    console.log("MongoDB connection failed:", error);
});
