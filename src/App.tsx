import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Images from "./Components/Image";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Post from "./page/post";

function App() {
  return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/" element={
                        <div>
                            <Nav />
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Hero />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "3rem" }}>
                                <Images />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "3rem" }}>
                                <a style={{ fontWeight: "bolder", fontSize: "25px", padding: ".5rem", textAlign: "center" }}>Download images? (does not work right now)</a>
                            </div>
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
      </div>
  );
};

export default App;
