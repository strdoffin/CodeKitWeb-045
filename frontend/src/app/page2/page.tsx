import Home2Landing from "@/components/compage2/home2landing";
import PricingSection from "@/components/compage2/pricingsection";
import Stats from '@/components/compage2/stats';
import UserComment from "@/components/compage2/usercomment";

export default function HomePage() {
    return (
        <div>
            <Home2Landing />
            <Stats />
            <UserComment/>
            <PricingSection/>
        </div>
    );
}
