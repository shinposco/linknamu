import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-36 w-36 overflow-hidden rounded-full bg-gray-100 shadow-[0_16px_40px_-12px_rgba(194,120,74,0.4)] ring-4 ring-white/80 dark:bg-neutral-800 dark:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] dark:ring-white/10">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={name}
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-5xl font-semibold text-gray-400 dark:text-neutral-500">
            {name.slice(0, 1)}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <h1 className="text-xl font-bold tracking-tight">{name}</h1>
        <p className="text-sm text-gray-500 dark:text-neutral-400">{bio}</p>
      </div>
    </div>
  );
}
