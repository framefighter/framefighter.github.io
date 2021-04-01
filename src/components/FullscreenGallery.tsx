import React, { Fragment } from 'react';
import { generatePath, useHistory, useRouteMatch } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
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
    const index = images.findIndex(i => i.filename === image.filename)
    const history = useHistory();
    const match = useRouteMatch();
    const gotoIndex = (new_index: number) => {
        let new_image = images[new_index]
        if (!new_image) {
            history.goBack();
            return
        }
        let new_path = generatePath(match.path, {
            filename: new_image.filename
        });
        history.replace(new_path)
    }
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => gotoIndex(index + 1),
        onSwipedRight: () => gotoIndex(index - 1),
    });

    if (!(match.params as any).filename) return null
    if ((match.params as any).filename !== image.filename) return null
    if (index === undefined) return null
    const count = images.length;
    return <Fragment>
        <GalleryCounter index={index} count={count} />
        <GalleryNavigation
            gotoIndex={gotoIndex}
            index={index}
            count={count}
        >
            <div
                style={{ backgroundImage: `url(${image.src})` }}
                className="fullscreen_image"
                onClick={() => {
                    history.goBack();
                }}
                {...swipeHandlers}
            >
                <div className="close_fullscreen" >
                    {end_icon}Click Image to Close
                </div>
            </div>
        </GalleryNavigation>
    </Fragment>
}

export default FullscreenGallery;