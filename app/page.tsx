import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/status">Status</Link>
      <Link href="/diff">Diff</Link>
    </div>
  );
}
