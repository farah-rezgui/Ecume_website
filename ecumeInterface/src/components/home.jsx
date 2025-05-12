
import ExploreSection from "./ExploreSection";
import WhyEcume from "./WhyEcume";
import DiscoverSection from "./DiscoverSection";
import CTASection from "./CTASection";
import NewsSection from "./NewsSection";
import About from "./About";
import Newsletter from "./Newsletter";
import Bg from "./Bg";

function HomePage() {
return (
    <div className='font-inter text-gray-900'>
    <Bg />
    <ExploreSection />
    <WhyEcume />
    <DiscoverSection />
    <CTASection />
    <NewsSection />
    <About />
    <Newsletter />
    
    </div>
);
}
export default HomePage ;