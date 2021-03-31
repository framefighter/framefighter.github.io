import React, { Fragment } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { LoadedImage } from '../App';
import GalleryCounter from './GalleryCounter';
import GalleryNavigation from './GalleryNavigation';

const end_icon = <svg width="20" height="20" viewBox="0 0 20 20" className="close_icon">
    <polygon points="0,0 20,20 20,0 0,20" className="arrow_triangle" />
</svg>;

interface FullscreenGalleryProps {
    images: LoadedImage[],
    image: LoadedImage,
}

function FullscreenGallery(props: FullscreenGalleryProps) {
    const { images, image } = props;
    const history = useHistory();
    const match = useRouteMatch();
    if (!(match.params as any).filename) return null
    if ((match.params as any).filename !== image.filename) return null
    const index = images.findIndex(i => i.filename === image.filename)
    if (index === undefined) return null
    const count = images.length;
    return <Fragment>
        <GalleryCounter index={index} count={count} />
        <GalleryNavigation
            images={images}
            index={index}
            count={count}
        >
            <div
                style={{ backgroundImage: `url(${image.src})` }}
                className="fullscreen_image"
                onClick={() => {
                    history.goBack();
                }}
            >
                <div className="close_fullscreen" >
                    {end_icon}Click Image to Close
                </div>
            </div>
        </GalleryNavigation>
    </Fragment>
}

export default FullscreenGallery;