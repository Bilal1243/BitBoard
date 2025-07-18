import Menu from "../models/menuModel.js";
import expressAsyncHandler from "express-async-handler";

const createMenu = expressAsyncHandler(async (req, res) => {
  console.log(req.body)
  const { menu_name, menu_description, menu_items } = req.body;

  const newMenu = await Menu.create({
    menu_name,
    menu_description,
    menu_items,
  });

  if (newMenu) {
    res.status(201).json(newMenu);
  } else {
    res.status(404);
    throw new Error("failed to create menu");
  }
});

const getAllMenu = expressAsyncHandler(async (req, res) => {
  const menu = await Menu.find();

  res.json(menu);
});


export { createMenu , getAllMenu };
