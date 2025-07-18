const MenuSection = ({ selected }) => (
  <section className="bg-black text-white px-10 py-6">
    <h2 className="text-3xl text-yellow-400 font-bold mb-4">
      {selected?.menu_name?.toUpperCase() || "Nothing"}
    </h2>
    <p className="mb-5 text-yellow-100">{selected?.menu_description}</p>

    <div className="grid md:grid-cols-2 gap-6">
      {selected?.menu_items?.map((item, index) => (
        <div key={index} className="relative">
          <div className="flex justify-between items-start">
            {/* LEFT: Item name & description */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white">
                {item.item_name}
              </h3>
              {item.item_description && (
                <p className="text-sm text-gray-400">{item.item_description}</p>
              )}
            </div>

            {/* RIGHT: Price */}
            <div className="text-right pl-4 min-w-[60px]">
              <span className="text-lg font-semibold text-white">
                ${item.item_price}
              </span>
            </div>
          </div>
          <hr className="my-2 border-gray-600" />
        </div>
      ))}
    </div>
  </section>
);

export default MenuSection;
