import express from "express";
import cors from "cors";
import path from "path";



// middleware
import crosOptions from "./middleware/CorsMiddleware.js"
import ErrorHandler from "./middleware/ErrorHandler.js"
import RootRouter from "./routes/RootRouter.js"
import Error404 from "./controllers/Error404controller.js";

const app = express();
const PORT = process.env.PORT || 8000;


// cors allowed domains
app.use(cors(crosOptions))

// middleware for form data
// content-Type = 'application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: true}));

// middleware for serve json
app.use(express.json());

// middleware for serve static file 
app.use("/api",express.static(path.join("/Backend/public"))); 


// routes 
app.use("/api",RootRouter)


// 404 page not found 
app.all("*",Error404)

// error handler 
app.use(ErrorHandler)

// listening on port
app.listen(PORT, () => {
    console.log(`Example app listening on port localhost:${PORT}`)
  })