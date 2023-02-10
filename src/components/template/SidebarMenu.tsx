import { ArchiveIcon, ShoppingBagIcon, ShoppingCartIcon } from "../icons";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

export default function SidebarMenu() {
  return (
    <aside
      className={`
            flex flex-col
        `}
    >
      <div
        className={`
                  flex flex-col items-center justify-center
                  h-24 w-24
                  bg-gradient-to-r from-indigo-500 to-purple-800
            `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <SidebarItem url="/" text="Produtos" icon={ShoppingBagIcon} />
        <SidebarItem url="/productTypes" text="Tipos produtos" icon={ArchiveIcon} />
        <SidebarItem
          url="/acquisition"
          text="Vendas"
          icon={ShoppingCartIcon}
        />
      </ul>
    </aside>
  );
}
