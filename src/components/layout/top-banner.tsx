import Inner from "@/components/layout/inner";
import { getHeaderData } from "@/i18n/request";
import Link from "next/link";

const LinkList = ({ links }: { links: { href: string; label: string }[] }) => (
  <ul className="flex gap-4">
    {links.map((link, index) => (
      <li key={index}>
        <Link href={link.href} className="text-xs">
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

const TopBanner = async () => {
  const headerData = await getHeaderData();
  const { navLinks, actionLinks } = headerData.TopBanner;

  return (
    <div className="border-b border-b-slate-200 bg-white">
      <Inner>
        <div className="flex items-center justify-between">
          <div className="flex">
            <LinkList links={navLinks} />
          </div>
          <div>
            <LinkList links={actionLinks} />
          </div>
        </div>
      </Inner>
    </div>
  );
};

export default TopBanner;
