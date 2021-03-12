import React, { useState } from 'react';
import HoverImage from './GalleryImage';
import "./ImageGallery.css";

interface ImageGalleryProps<T> {
    images: Array<T>
}

function ImageGallery(props: ImageGalleryProps<string>) {

    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="image_gallery">
            {props.images.map((src, ind) => <figure
                key={ind}
                className="image_preview">
                <HoverImage
                    index={ind}
                    src={src}
                    selected={ind === selected}
                    setSelected={n => setSelected(n)}
                />
            </figure>)}
        </div>
    );
}

export default ImageGallery;