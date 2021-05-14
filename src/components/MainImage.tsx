import React from "react";
import { NavLink } from 'react-router-dom';
import { LoadedImage, sites } from '../App';
import GalleryImage from './GalleryImage';
import ImageGallery from './ImageGallery';

interface MainImageProps {
    images: LoadedImage[],
    count: number,
    hideShowMore?: boolean,
    fixed?: boolean,
}

function MainImage(props: MainImageProps) {
    const { images, count, hideShowMore, fixed } = props;
    return <div id="main_image">
        {images.slice(0, count).map((i, idx) =>
            <GalleryImage
                key={idx}
                image={i}
                images={images}
                fixed={fixed}
            />)}
        {!hideShowMore && <NavLink className="more_button" to={sites[1].path}>Show More...</NavLink>}
    </div>
}

export default MainImage;