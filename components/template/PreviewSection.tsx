import Image from "next/image";

interface PreviewCard {
  title: string;
  imageUrl: string;
  alt: string;
}

const previews: PreviewCard[] = [
  {
    title: "GitHub統計カード",
    imageUrl: "https://github-readme-stats.vercel.app/api?username=vercel&count_private=true&show_icons=true&theme=tokyonight",
    alt: "GitHub Stats Example",
  },
  {
    title: "言語使用率",
    imageUrl: "https://github-readme-stats.vercel.app/api/top-langs/?username=vercel&layout=compact&theme=tokyonight",
    alt: "Language Stats Example",
  },
];

export default function PreviewSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          プレビュー
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {previews.map((preview, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {preview.title}
                </h3>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <Image
                    src={preview.imageUrl}
                    alt={preview.alt}
                    width={400}
                    height={160}
                    unoptimized
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 