import Link from "next/link";

interface SidebarItemProps {
  url: string;
  text: string;
  icon: any;
}

export default function SidebarItem(props: SidebarItemProps) {
  return (
    <li
      className={`
            hover:bg-gray-100
        `}
    >
      <Link href={props.url}>
        <div
          className={`
                    flex flex-col justify-center items-center
                    h-20 w-24
                `}
        >
          {props.icon}
          <span
            className={`
                        text-xs font-light text-gray-600
                    `}
          >
            {props.text}
          </span>
        </div>
      </Link>
    </li>
  );
}
