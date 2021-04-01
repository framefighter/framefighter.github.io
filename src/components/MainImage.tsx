import React from "react";
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { LoadedImage, sites } from '../App';
import { getImagePath } from '../utils';
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
    return <div>
        {images.slice(0, count).map((i, idx) =>
            <ImageGallery
                key={idx}
                images={[i]}
                hideNavigation
                fixed={fixed}
            />)}
        {!hideShowMore && <NavLink className="more_button" to={sites[1].path}>Show More...</NavLink>}
    </div>
}

export default MainImage;