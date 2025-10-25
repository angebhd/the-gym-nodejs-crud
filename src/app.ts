const express = require('express');
import type { Application, Request, Response } from 'express';
const itemRoutes = require('./routes/index');

const PORT = process.env.PORT || 3000;
const app: Application = express();

// Body parser middleware
app.use(express.json());

app.use("/items", itemRoutes);


app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})