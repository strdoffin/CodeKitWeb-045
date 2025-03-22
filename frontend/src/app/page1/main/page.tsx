import Home1landing from "@/components/compage1/home1landing";
import Sponser from "@/components/sponser";
import Blogsectionmain from "@/components/compage1/blogsectionmain";
import Heromain from "@/components/compage1/heromain";
import Featuressection from "@/components/compage1/featuresection";
import UserComment from "@/components/compage1/usercomment";
import Blanernum from "@/components/compage1/blanernum";
import Contactsmain from "@/components/compage1/contantsmain";
import Blanersend from "@/components/compage1/blanersend";
import Footermain from "@/components/compage1/footermain";
import Navbarmain from "@/components/compage1/navbarmain";

export default function HomePage() {
    return (
        <div>
            <Navbarmain />
            <Home1landing />
            <Sponser />
            <Blogsectionmain />
            <Heromain />
            <Featuressection />
            <UserComment />
            <Blanernum />
            <Contactsmain />
            <Blanersend />
            <Footermain />
        </div>
    );
}