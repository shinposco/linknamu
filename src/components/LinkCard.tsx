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
      className="block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900"
    >
      {title}
    </a>
  );
}
