import Changes from "@/components/home/changes";
import Companion from "@/components/reusables/railCompanion";
import Explore from "@/components/about/explore";
import Nav from "@/layouts/Nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Companion/>
      <Changes/>
      <Explore/>
    
    </div>
  );
}