import express from "express"
import  {fetchUsers, createUser, fetchSingleUser, deleteUser } from "../controller/userController.js"
const router=express.Router()


router.route("/users").get(fetchUsers)
router.route("/users").post(createUser)
router.route("/users/:id").get(fetchSingleUser)
router.route("/users/:id").delete(deleteUser)



export default router