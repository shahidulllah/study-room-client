import Banner from "./Banner";
import Faq from "./Faq";
import Feature from "./Feature";
import FeatureCard from "./FeatureCard";
import Team from "./Team";


const Home = () => {
    return (
        <div>
            <div>
            <Banner></Banner>
            </div>
            <div className="p-4 lg:mx-24">
                <Feature></Feature>
                <FeatureCard></FeatureCard>
                <Faq></Faq>
                <Team></Team>
            </div>
        </div>
    );
};

export default Home;