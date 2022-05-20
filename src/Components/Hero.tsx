function Hero() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "1rem", marginTop: "2rem", minHeight: "0vh", width: "30rem" }}>
                <div style={{ flex: "2" }}>
                    <img style={{ objectFit: "cover", borderRadius: "50%" }} src={require("../image-me-daddy/yoni.jpg")}/>
                </div>
                <div style={{ flex: "3", height: "7rem", textAlign: "center", paddingTop: "3rem" }}>
                    <p style={{ fontWeight: "bold", fontSize: "35px", paddingRight: "5rem" }}>Yoni Kosiner</p>
                </div>
            </div>
            <div style={{ marginLeft: "1rem" }}>
                <div style={{ marginLeft: "8rem", position: "absolute", top: "15%" }}>
                    <p>69 posts 69 followers 69 following</p>
                </div>
                <div>
                    <p>📷 Taking pictrues</p>
                    <a style={{ fontWeight: "bold" }} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target=" _blank">deffintaly-a-website.com</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
