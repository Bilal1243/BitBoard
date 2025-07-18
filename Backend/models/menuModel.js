import mongoose from "mongoose";

const menuSchema = mongoose.Schema(
  {
    menu_name: {
      type: String,
      required: true,
    },
    menu_description: {
      type: String,
      required: true,
    },
    menu_items: [
      {
        item_name: { type: String },
        item_description: { type: String },
        item_price: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.model("menu", menuSchema);

export default Menu;
