import React, { Fragment } from 'react';
import GalleryCounter from './GalleryCounter';
import  GalleryNavigation  from './GalleryNavigation';

interface GalleryImageProps {
    src: string,
    index: number,
    count: number,
    selected: boolean,
    setSelected: (n: number | null) => void,
    fullWidth?: boolean,
    alt?: string,
}

function GalleryImage(props: GalleryImageProps) {
    const { src, index, count, selected, setSelected, fullWidth } = props;

    return (
        <Fragment>
            <div
                style={{ backgroundImage: `url(${src})` }}
                className={fullWidth ? "full_width_image hover_image" : "hover_image"}
                
                onClick={() => setSelected(index)}
            />
            {selected && <Fragment>
                <GalleryCounter index={index} count={count} />
                <GalleryNavigation
                    index={index}
                    count={count}
                    setSelected={setSelected}
                >
                    <div
                        style={{ backgroundImage: `url(${src})` }}
                        className="fullscreen_image"
                        onClick={() => setSelected(null)}
                    />
                </GalleryNavigation>
            </Fragment>}
        </Fragment>
    );
}

export default GalleryImage;