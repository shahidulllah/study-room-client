import Banner from "./Banner";
import Feature from "./Feature";
import FeatureCard from "./FeatureCard";
import Team from "./Team";


const Home = () => {
    return (
        <div className="p-4 lg:mx-24">     
           <Banner></Banner>
           <Feature></Feature>
           <FeatureCard></FeatureCard>
           <Team></Team>
        </div>
    );
};

export default Home;