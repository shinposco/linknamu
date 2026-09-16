import LinkCard from "./LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <div className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <LinkCard key={link.id} id={link.id} title={link.title} url={link.url} />
      ))}
    </div>
  );
}
