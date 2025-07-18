import React, { useState } from "react";
import {
  useCreateMenuMutation,
  useGetAllMenuQuery,
} from "../slices/menuApiSice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddMenuScreen = () => {
  const [menuName, setMenuName] = useState("");
  const [menuDescription, setMenuDescription] = useState("");
  const [menuItems, setMenuItems] = useState([
    { item_name: "", item_description: "", item_price: "" },
  ]);

  const navigate = useNavigate();

  const [createMenu] = useCreateMenuMutation();
  const { data, refetch } = useGetAllMenuQuery();

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...menuItems];
    updatedItems[index][field] = value;
    setMenuItems(updatedItems);
  };

  const addMenuItem = () => {
    setMenuItems([
      ...menuItems,
      { item_name: "", item_description: "", item_price: "" },
    ]);
  };

  const removeMenuItem = (index) => {
    const updatedItems = menuItems.filter((_, i) => i !== index);
    setMenuItems(updatedItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      menu_name: menuName,
      menu_description: menuDescription,
      menu_items: menuItems,
    };

    try {
      const response = await createMenu(payload).unwrap();
      toast.success("Menu added successfully!");
      setMenuName("");
      setMenuDescription("");
      setMenuItems([{ item_name: "", item_description: "", item_price: "" }]);
      refetch();
      navigate("/menu");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add menu.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-10 rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Menu</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Menu Name</label>
          <input
            type="text"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Menu Description</label>
          <textarea
            value={menuDescription}
            onChange={(e) => setMenuDescription(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <h3 className="text-xl font-bold mb-2">Menu Items</h3>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="mb-4 border border-gray-200 p-4 rounded bg-gray-50"
          >
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">
                Item Name
              </label>
              <input
                type="text"
                value={item.item_name}
                onChange={(e) =>
                  handleItemChange(index, "item_name", e.target.value)
                }
                className="w-full border border-gray-300 rounded px-3 py-1"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">
                Item Description
              </label>
              <input
                type="text"
                value={item.item_description}
                onChange={(e) =>
                  handleItemChange(index, "item_description", e.target.value)
                }
                className="w-full border border-gray-300 rounded px-3 py-1"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">
                Item Price
              </label>
              <input
                type="number"
                value={item.item_price}
                onChange={(e) =>
                  handleItemChange(index, "item_price", e.target.value)
                }
                className="w-full border border-gray-300 rounded px-3 py-1"
              />
            </div>
            {menuItems.length > 1 && (
              <button
                type="button"
                onClick={() => removeMenuItem(index)}
                className="text-red-600 text-sm mt-2"
              >
                Remove Item
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addMenuItem}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-6"
        >
          + Add Item
        </button>

        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit Menu
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMenuScreen;
