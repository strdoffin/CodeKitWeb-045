import Home2Landing from "@/components/compage2/home2landing";
import Stats from '@/components/compage2/stats';
import UserComment from "@/components/compage2/usercomment";

export default function HomePage() {
    return (
        <div>
            <Home2Landing />
            <Stats />
            <UserComment/>
        </div>
    );
}
