import React, { Fragment } from 'react';
import { generatePath, useHistory, useRouteMatch } from 'react-router-dom';
import { LoadedImage } from '../App';
import { getImagePath } from '../utils';
import FullscreenGallery from './FullscreenGallery';

interface GalleryImageProps {
    image: LoadedImage,
    images: LoadedImage[],
    fullWidth?: boolean,
    alt?: string,
    fixed?: boolean,
}

function GalleryImage(props: GalleryImageProps) {
    const { image, images, fixed } = props;
    const history = useHistory();
    const match = useRouteMatch();

    return <Fragment>
        <div
            style={{ backgroundImage: `url(${image.src})` }}
            className={fixed ? "hover_image" : "hover_image button"}
            onClick={() => {
                if (fixed) return;
                let path = generatePath(match.path, { filename: image.filename });
                path = getImagePath(match.path, image);
                console.log("gallery image click", path)
                history.push(path);
            }}
        />
        <FullscreenGallery
            image={image}
            images={images}
        />
    </Fragment>

}

export default GalleryImage;