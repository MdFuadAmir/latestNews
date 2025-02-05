import Header from "../../Components/Header/Header";
import NewsFeed from "../../Components/Header/NewsFeed/NewsFeed";
import LafeNavber from "../../Components/Layout-Component/LeftNavber/LafeNavber";
import MainContent from "../../Components/Layout-Component/LeftNavber/MainContent/MainContent";
import RigntNavber from "../../Components/Layout-Component/LeftNavber/RigntNavber/RigntNavber";
import Navber from "../../Components/Navber/Navber";


const Home = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header/>
                <section className="w-11/12 mx-auto">
                    <NewsFeed/>
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
                <Navber/>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
            <aside className="left col-span-3">
                <LafeNavber/>
                </aside>
            <section className="col-span-6">
               <MainContent/>
            </section>
            <aside className="right col-span-3">
                <RigntNavber/>
            </aside>

            </main>
        </div>
    );
};

export default Home;