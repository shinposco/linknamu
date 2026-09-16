import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-6 py-16">
      <ThemeToggle />
      <Profile name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
      <LinkList links={links} />
    </main>
  );
}
