interface Props {
  item: {
    id: number;
    text: string;
    icon: string;
    url: string;
  };
  setActiveMenu: (id: number) => void;
  activeMenu: number;
}

export const NavItem = ({ item, setActiveMenu, activeMenu }: Props) => {
  return (
    <a href={item.url} onClick={() => setActiveMenu(item.id)}>
      <div
        className={`${
          activeMenu === item.id ? "bg-blue-400" : "bg-gray-800"
        } group relative flex h-14 w-14 items-center justify-center rounded-full border-0 transition-all duration-300 hover:bg-blue-400`}
      >
        <img
          src={item.icon}
          alt={item.text}
          className="h-6 w-6 text-gray-800 dark:text-white"
        />
        <span className="absolute right-0 top-0 -z-10 flex h-full items-center justify-center rounded-full bg-blue-400 pl-6 pr-8 opacity-0 transition-all duration-300 group-hover:-translate-x-6 group-hover:rounded-r-none group-hover:opacity-100">
          {item.text}
        </span>
      </div>
    </a>
  );
};
