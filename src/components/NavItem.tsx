
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
          activeMenu === item.id ? 'bg-blue-400' : 'bg-gray-800'
        } group relative border-0 w-14 h-14 flex justify-center items-center rounded-full transition-all duration-300 hover:bg-blue-400`}
      >
        <img
          src={item.icon}
          alt={item.text}
          className="w-6 h-6 text-gray-800 dark:text-white"
        />
        <span className="absolute right-0 top-0 bg-blue-400 pl-6 pr-8 h-full opacity-0 group-hover:-translate-x-6 group-hover:opacity-100 group-hover:rounded-r-none transition-all duration-300 flex justify-center items-center rounded-full -z-10">
          {item.text}
        </span>
      </div>
    </a>
  );
};
