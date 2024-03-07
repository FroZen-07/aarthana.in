import ComingSoon from "@/components/ComingSoon";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <NavBar />
      <ComingSoon/>
    </div>
  );
}
