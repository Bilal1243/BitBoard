import { useState } from 'react';

const Tabs = ({ selected, setSelected , menu}) => {
  return (
    <div className="flex justify-center my-6">
      {menu?.map(item => (
        <button
          key={item.menu_name}
          onClick={() => setSelected(item)}
          className={`px-4 py-2 mx-2 border border-red-600 rounded cursor-pointer ${
            selected === item ? 'bg-red-600 text-white' : 'bg-black text-white'
          }`}
        >
          {item.menu_name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
