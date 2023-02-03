import Map from "./pages/Map";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contacts from "./pages/Contacts";
import House from "./pages/House";

function App() {
    return (
        <div className='App'>
            <>
                    <BrowserRouter basename='/real_estate'>
                    <Header />
                    <main className='content'>
                        <Routes>
                            <Route exact path='/' element={<Map />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contacts' element={<Contacts />} />
                            <Route path='/houses/:id' element={<House />} />
                            <Route element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;
