import express from "express";
const router = express.Router();

import customerRegistered from "../controllers/customerRegisteredController.js";


//post customer registered
router.post("/user/customerRegistered",customerRegistered)

export default router