import {Router} from "express"
import bodyParser from "body-parser"
import { getUsers,register,login, checkAuth } from "../controller"


const router = Router()
const parser = bodyParser.json()

router.get("/all",parser,getUsers)
router.get("/email/:id")
router.post("/register",parser,register)
router.post("/login",parser,login)
router.get("/checkAuth",parser,checkAuth)
router.put("/edit/:id")
router.delete("/delete")

export default router