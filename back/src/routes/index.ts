import {Router} from "express"
import bodyParser from "body-parser"
import { getUsers,register } from "../controller"


const router = Router()
const parser = bodyParser.json()

router.get("/all",parser,getUsers)
router.get("/email/:id")
router.post("/register",parser,register)
router.put("/edit/:id")
router.delete("/delete")

export default router