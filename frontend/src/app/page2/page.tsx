import BlogSection from "@/components/compage2/blogsection";
import ContactSection from "@/components/compage2/contactsection";
import Home2Landing from "@/components/compage2/home2landing";
import PricingSection from "@/components/compage2/pricingsection";
import Stats from "@/components/compage2/stats";
import UserComment from "@/components/compage2/usercomment";
import Sponser from "@/components/sponser";
import Navbar2 from "@/components/compage2/navbar2";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div>
      <Navbar2 />
      <Home2Landing />
      <Stats />
      <UserComment />
      <PricingSection />
      <BlogSection />
      <Sponser />
      <ContactSection />
      <Footer />
      
    </div>
  );
}
