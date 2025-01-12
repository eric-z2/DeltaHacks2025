import Home from "./Home.jsx"
import Page2 from "./Pages/Page2.jsx"
import Header from "./Pages/Header.jsx"
import { Route, Routes } from "react-router-dom"
import SignUp from './Pages/SignUp.jsx'
import Query from './Pages/Query.jsx'

function App() {
    return (
        <>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Page2 />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/query" element={<Query />}/>
                </Routes>
            </div>

        </>
    )
}

export default App