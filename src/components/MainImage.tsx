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
        {images.slice(0, count).map(i =>
            <ImageGallery
                key={i.filename}
                images={[i]}
                hideNavigation
                fixed={fixed}
            />)}
        {!hideShowMore && <NavLink className="more_button" to={sites[1].path}>Show More...</NavLink>}
    </div>
    // <div
    //     className="main_picture"
    //     style={{ backgroundImage: `url(${image?.src})` }}
    //     onClick={() => {
    //         let path = getImagePath(sites[1].path + "/" + image.category, image);
    //         console.log(path)
    //         history.push(path);
    //     }}
    // />
}

export default MainImage;