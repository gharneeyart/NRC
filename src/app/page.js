import Changes from "@/components/home/changes";
import Companion from "@/components/reusables/railCompanion";
import Explore from "@/components/about/explore";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Companion/>
      <Changes/>
      <Explore/>
    
    </div>
  );
}