import Images from "./Components/Image";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

function App() {
  return (
        <div>
            <Nav />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Hero />
            </div>
            <div>
                <Images />
            </div>
      </div>
  );
}

export default App;
