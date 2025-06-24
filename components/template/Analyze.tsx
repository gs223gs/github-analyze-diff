import Image from "next/image";

interface AnalyzeProps {
  user: string;
  statsData?: string;
}

export default function Analyze({ user, statsData }: AnalyzeProps) {
  return (
    <div>
      <p>{user}</p>
      {statsData ? (
        <div>
          <h3>GitHub Stats Data:</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {statsData}
          </pre>
        </div>
      ) : (
        <Image
          src={`https://github-readme-stats.vercel.app/api?username=${user}&count_private=true&show_icons=true&theme=tokyonight`}
          alt={`${user}'s GitHub stats`}
          width={495}
          height={195}
        />
      )}
    </div>
  );
}
