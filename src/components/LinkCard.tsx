"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ id, title, url }: LinkCardProps) {
  function handleClick() {
    fetch(`/api/click/${id}`, { method: "POST" }).catch(() => {
      // 클릭 수 기록 실패는 사용자 이동을 막지 않음
    });
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-2xl border border-white/60 bg-white/55 px-5 py-4 text-center font-medium text-gray-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/75 hover:shadow-[0_8px_28px_-6px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-neutral-900/50 dark:text-gray-100 dark:hover:bg-neutral-900/70"
    >
      {title}
    </a>
  );
}
