export const profile = {
  name: "신명균",
  bio: "HyREX 개발자",
  avatarUrl: "/profile.jpg",
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/shinposco" },
  { id: "instagram", title: "Instagram", url: "https://www.instagram.com/shinmk660630" },
  { id: "email", title: "Email", url: "mailto:shinposco@naver.com" },
];
