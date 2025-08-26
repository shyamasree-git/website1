import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "About", path: "/about"
    },
    {
      label: "Services",
      dropdown: [
        { label: "Web", path: "/services/web" },
        { label: "Mobile", path: "/services/mobile" },
      ],
    },
    {
      label: "Others",
      dropdown: [
        {
          label: "Gallery",
          path: "/others/gallery",
        },
        {
          label: "Terms",
          path: "/others/terms",
        },
      ],
    },
    { label: "Contact", path: "/contact" },
  ];
  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <ul className="flex space-x-6">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="relative"
          onClick={() => item.dropdown && handleDropdownClick(index)}
        >
          {item.dropdown ? (
            <button className="hover:text-blue-800">{item.label}</button>
          ) : (
            <Link to={item.path} className="hover:text-blue-800">
              {item.label}
            </Link>
          )}

          {item.dropdown && openDropdown === index && (
            <ul className="absolute -left-14 mt-2 bg-white text-black rounded shadow-lg w-40">
              {item.dropdown.map((sub, subIndex) => (
                <li key={subIndex}>
                  <Link
                    to={sub.path}
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
