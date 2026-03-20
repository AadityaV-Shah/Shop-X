import HeroSection from "../components/HeroSection";
import FeaturedProductsCarousel from "../components/FeaturedProductsCarousel";
import Fragrance from "../components/Fragrance";
import Cosmetics from "../components/Cosmetics";


export default function EcommerceHome() {
    return (
        <>
            <HeroSection />
            <FeaturedProductsCarousel />
            <Fragrance />
            <Cosmetics />
        </>
    );
}
