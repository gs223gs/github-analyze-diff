import Image from "next/image";
import { useAtom } from "jotai";
import { themeAtom } from "@/app/state/atoms";

interface AnalyzeProps {
  user: string;
}

export default function Analyze({ user }: AnalyzeProps) {
  const [theme] = useAtom(themeAtom);
  return (
    <div>
      <p>{user}のGitHub統計</p>
      <div>
        <div>
          <Image
            src={`https://img.shields.io/github/followers/${user}?label=follow&logo=github&style=flat`}
            alt={`${user}'s GitHub stats`}
            width={495}
            height={195}
            unoptimized
          />
        </div>
        <div>
          <Image
            src={`https://img.shields.io/github/stars/${user}?label=star&logo=github&style=flat`}
            alt={`${user}'s GitHub stats`}
            width={495}
            height={195}
            unoptimized
          />
        </div>
      </div>

      <div>
        <div>
          <Image
            src={`https://badgen.org/img/zenn/${user}/articles?style=plastic`}
            alt={`${user}'s GitHub stats`}
            width={495}
            height={195}
            unoptimized
          />
        </div>
        <div>
          <Image
            src={`https://badgen.org/img/zenn/${user}/likes?style=plastic`}
            alt={`${user}'s GitHub stats`}
            width={495}
            height={195}
            unoptimized
          />
        </div>
        <div>
          <Image
            src={`https://badgen.org/img/zenn/${user}/followers?style=plastic`}
            alt={`${user}'s GitHub stats`}
            width={495}
            height={195}
            unoptimized
          />
        </div>
      </div>

      <div>
        <div>
          <Image
            src={`https://badgen.org/img/qiita/${user}/contributions?style=plastic`}
            alt={`${user}'s GitHub stats`}
            width={495}
            height={195}
            unoptimized
          />
        </div>
        <div>
          <Image
            src={`https://badgen.org/img/qiita/${user}/articles?style=plastic`}
            alt={`${user}'s GitHub stats`}
            width={495}
            height={195}
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=${theme}`}
            alt={`${user}'s GitHub stats`}
            width={495}
            height={195}
            unoptimized
          />
        </div>
        <div>
          <Image
            src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${user}&theme=${theme}`}
            alt={`${user}'s GitHub stats`}
            width={495}
            height={195}
            unoptimized
          />
        </div>
        <div>
          <Image
            src={`https://github-readme-stats.vercel.app/api?username=${user}&count_private=true&show_icons=true&theme=${theme}`}
            alt={`${user}'s GitHub stats`}
            width={495}
            height={195}
            unoptimized
          />
        </div>
        <div>
          <Image
            src={`http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${user}&theme=${theme}&utcOffset=9`}
            alt={`${user}'s GitHub stats`}
            width={495}
            height={195}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
