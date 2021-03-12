import React, { useState } from 'react';
import HoverImage from './GalleryImage';

interface ImageGalleryProps<T> {
    images: Array<T>
}

function ImageGallery(props: ImageGalleryProps<string>) {
    const { images } = props;
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="image_gallery">
            {images.map((src, ind) => <figure
                key={ind}
                className="image_preview">
                <HoverImage
                    index={ind}
                    count={images.length}
                    src={src}
                    selected={ind === selected}
                    setSelected={n => {console.log(n); setSelected(n)}}
                />
            </figure>)}
        </div>
    );
}

export default ImageGallery;