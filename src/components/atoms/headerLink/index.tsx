import Link from "next/link";

interface HeaderLinkProps {
  text: string;
  href: string;
  className?: string;
}

export default function HeaderLink({ text, href, className = "" }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className={`text-(--main-color) hover:text-gray-700 px-3 py-2 text-base font-medium transition duration-200 ${className}`}
    >
      {text}
    </Link>
  );
}
