import { useState } from "react";
import { NavItem } from "./NavItem";
import { menuItems } from "../data/menuItems";

export const Nav = () => {
    const [activeMenu, setActiveMenu] = useState("HOME");

    const setActiveMenuItem = (text: string) => {
        setActiveMenu(text);
    };

    return (
        <ul className="flex flex-col gap-4 fixed right-4 top-[30%]">
            {menuItems.map((item, index) => (
                <NavItem
                    key={index}
                    item={item}
                    setActiveMenu={setActiveMenuItem}
                    activeMenu={activeMenu}
                />
            ))}
        </ul>
    );
};
