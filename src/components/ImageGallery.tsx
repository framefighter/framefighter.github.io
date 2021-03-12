import React, { useState } from 'react';
import GalleryImage from './GalleryImage';

interface ImageGalleryProps<T> {
    images: Array<T>
}



function ImageGallery(props: ImageGalleryProps<string>) {
    const { images } = props;
    const [selected, setSelected] = useState<number | null>(null);


    return (
        <section className="image_gallery">
            {images.map((src, ind) => <div
                key={ind}
                className="image_preview">
                <GalleryImage
                    index={ind}
                    count={images.length}
                    src={src}
                    selected={ind === selected}
                    setSelected={n => { setSelected(n) }}
                />
            </div>)}
        </section>
    );
}

export default ImageGallery;