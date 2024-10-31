import express from 'express'
import { signupUser, signinUser,getUserInfomation,checkCooke } from "../Controllers/user.controller.js";

const router=express.Router();
router.route("/signup").post(signupUser)
router.route("/signin").post(signinUser)
router.route("/check-cookie").get(checkCooke)
router.route("/userInfo").get(getUserInfomation)



export default router;