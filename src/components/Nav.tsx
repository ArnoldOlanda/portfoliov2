import { useState } from "react";

const menuItems = [
    {
        text: "HOME",
        icon: "/public/home.svg",
    },
    {
        text: "ABOUT",
        icon: "/public/user.svg",
    },
    {
        text: "PORTFOLIO",
        icon: "/public/portfolio.svg",
    },
    {
        text: "CONTACT",
        icon: "/public/imbox.svg",
    },
];

export const Nav = () => {
    const [activeMenu, setActiveMenu] = useState("HOME");

    const setActiveMenuItem = (text: string) => {
        setActiveMenu(text);
    };

    return (
        <ul className="flex flex-col gap-4 fixed right-4 top-[30%]">
            {menuItems.map((item, index) => (
                <a key={index} href={`#${item.text}`}>
                    <li
                        className={`${
                            activeMenu === item.text
                                ? "bg-blue-400"
                                : "bg-gray-800"
                        } group relative border-0 w-14 h-14 flex justify-center items-center rounded-full transition-all duration-300 hover:bg-blue-400`}
                        onClick={() => setActiveMenuItem(item.text)}
                    >
                        <img
                            src={item.icon}
                            alt={item.text}
                            className="w-6 h-6 text-gray-800 dark:text-white"
                        />
                        <span className="absolute right-0 top-0 bg-blue-400 pl-6 pr-8 h-full opacity-0 group-hover:-translate-x-6 group-hover:opacity-100 group-hover:rounded-r-none transition-all duration-300 flex justify-center items-center rounded-full -z-10">
                            {item.text}
                        </span>
                    </li>
                </a>
            ))}
        </ul>
    );
};
