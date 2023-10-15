import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="h-16 flex z-50 items-center justify-between px-6 md:px-16 sticky top-0 bg-white bg-opacity-90 backdrop-blur border-b">
        <Link href="/">
          <div className="text-2xl font-black tracking-tighter">LapSelect</div>
        </Link>
      </div>
    </>
  );
}
