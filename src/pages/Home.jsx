import Header from "../components/Header"
import Search from "../components/search"
import "./Home.css"

function Home() {
    return <div>
        <Header />
        <h1 className="Titre_h1">Créations uniques</h1>
        <h2 className="Slogan">Le plus grand dressing au monde de créations uniques</h2>
        <Search />
        </div>
        

}

export default Home;