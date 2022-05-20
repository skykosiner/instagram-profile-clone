import { Link } from "react-router-dom";
import { images, image } from "../images";

function Images() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "0" }}>
            {images.map((image: image) => (
                <div>
                    <Link to={`/post/${image.id}`}>
                        <img width="500" height="500" style={{ objectFit: "cover" }} src={require (`../image-me-daddy/${image.imageName}`)} alt={image.alt}/>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Images;
