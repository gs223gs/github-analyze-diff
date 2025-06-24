import Image from "next/image";

interface AnalyzeProps {
  user: string;
}

export default function Analyze({ user }: AnalyzeProps) {
  return (
    <div>
      <p>{user}のGitHub統計</p>
      <Image
        src={`https://github-readme-stats.vercel.app/api?username=${user}&count_private=true&show_icons=true&theme=tokyonight`}
        alt={`${user}'s GitHub stats`}
        width={495}
        height={195}
        unoptimized
      />
    </div>
  );
}
