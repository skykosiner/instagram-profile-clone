import { useParams } from "react-router-dom";

import { images, image } from "../images";

function Post() {
    let id = useParams();

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {images.map((i: image) => {
                if (i.id === id.id) {
                    return (
                        <div>
                            <img src={require(`../image-me-daddy/${i.imageName}`)} />
                            <p>{i.caption}</p>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default Post;
