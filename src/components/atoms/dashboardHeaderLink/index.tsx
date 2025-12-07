import Link from "next/link";

interface DashboardHeaderLinkProps {
  text: string;
  href: string;
  className?: string;
}

export default function DashboardHeaderLink({
  text,
  href,
  className = "",
}: DashboardHeaderLinkProps) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-(--third-color) hover:text-(--main-color) active:bg-(--buttons-color) ${className}`}
    >
      {text}
    </Link>
  );
}
