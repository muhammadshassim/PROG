import './App.css';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import IdentifyingArea from "./IdentifyingArea";

const Home = () => (
    <div className="home">
        <div className="homeCard">
            Replacing Books
        </div>
        <Link to="/identifying-area">
            <div className="homeCard">
                Identifying Area
            </div>
        </Link>
    </div>
)

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/identifying-area" element={<IdentifyingArea />} />
            </Routes>
        </div>
    );
}

export default App;
