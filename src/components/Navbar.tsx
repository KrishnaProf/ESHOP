import React from "react";

const Navbar = () => {
  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/#blogs",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 dark: text-white duration-200 realtive z-40">
      <div>
        <div className="container">
          {/* Logo and links section */}
          <div>
            <a
              href="#"
              className="text-primary font-semibold text-2xl tracking-wider uppercase sm:text-3xl"
            >
              ESHOP
            </a>
            {/* Menu Items */}
            <div>
              <ul>
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="text-black">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>{/* navbr Right section  */}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
