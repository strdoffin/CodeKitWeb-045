
import Home3landing from './../../components/compage3/home3landing';
import Stat3 from './../../components/compage3/stat3';
import Usercomment3 from './../../components/compage3/usercomment3';
import PricingSection3 from '../../components/compage3/pricingsection3';
import BlogSection3 from './../../components/compage3/blogsection3';
import HelpSection from '@/components/compage3/HelpSection';
import Footer from '@/components/footer';
export default function page() {
    return (
        <div>
            <Home3landing />
            <Stat3 />
            <Usercomment3 />
            <PricingSection3 />
            <BlogSection3 />
            <HelpSection />
            {/* <Footer/> */}
        </div>
    );
}
