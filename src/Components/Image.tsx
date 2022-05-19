import { images, image } from "../images";

function Images() {
    return (
        <div>
            {images.map((image: image) => (
                <div>
                    <img src={require (`../image-me-daddy/${image.imageName}`)} alt={image.alt}/>
                </div>
            ))}
        </div>
    );
};

export default Images;
