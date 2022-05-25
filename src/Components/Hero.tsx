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
            <div style={{ marginLeft: "8rem", marginTop: "-4rem", paddingTop: "0rem" }}>
                    <p>9 posts 69 followers 69 following</p>
                </div>
                <div style={{ marginTop: "2rem"}}>
                    <p style={{ marginBottom: ".2rem" }}>📷 Taking pictures</p>
                    <a style={{ fontWeight: "bold", color: "rgb(182, 224, 255)", textDecoration: "none" }} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target=" _blank">definitely-a-website.com</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
