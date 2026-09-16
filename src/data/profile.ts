export const profile = {
  name: "신명균",
  bio: "HyREX 개발자",
  avatarUrl: "",
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/username" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com/in/username" },
  { id: "blog", title: "Blog", url: "https://yourblog.com" },
];
