import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800">
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
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm text-gray-500 dark:text-neutral-400">{bio}</p>
    </div>
  );
}
