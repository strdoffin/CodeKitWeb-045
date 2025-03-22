import Navbar2 from "@/components/compage2/navbar2";
import ServicesHero from "@/components/compage2/servicehero";
import ServicesGrid from "@/components/compage2/servicesgrid";
import Stats from "@/components/compage2/stats";
import Footer3 from "@/components/footer";

export default function HomePage() {
  return (
    <div>
        <Navbar2/>
        <ServicesHero/>
        <ServicesGrid/>
        <Stats/>
        <Footer3/>
    </div>
  );
}