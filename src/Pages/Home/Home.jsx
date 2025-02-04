import Header from "../../Components/Header/Header";
import NewsFeed from "../../Components/Header/NewsFeed/NewsFeed";


const Home = () => {
    return (
        <div>
            <header>
                <Header/>
                <section className="w-11/12 mx-auto">
                    <NewsFeed/>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default Home;