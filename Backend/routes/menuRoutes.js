import express from "express";
import {
  createMenu,
  getAllMenu,
} from "../controllers/menuController.js";

const menuRoute = express.Router();

menuRoute.route("/").get(getAllMenu).post(createMenu);

export default menuRoute;
