import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <Navbar />
      <div className="min-h-screen">{children}</div>
    </div>
  );
}
