import React, { Fragment } from 'react';
import { LoadedImage } from '../App';
import GalleryImage from './GalleryImage';

interface ImageGridProps {
    images: LoadedImage[],
    fixed?: boolean,
}


function ImageGrid(props: ImageGridProps) {
    const { images, fixed } = props;

    return <Fragment>
        {images.filter(Boolean).map((img, i) => <div
            key={i}
            className="image_preview"
        >
            <GalleryImage
                image={img}
                images={images}
                fixed={fixed}
            />
        </div>)}
    </Fragment>
}

export default ImageGrid;