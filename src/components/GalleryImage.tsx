import React, { Fragment } from 'react';
import './GalleryImage.css';

interface GalleryImageProps {
    src: string,
    index: number,
    selected: boolean,
    setSelected: (n: number | null) => void,
    alt?: string,
}

function GalleryImage(props: GalleryImageProps) {
    const { alt, src, index, selected, setSelected } = props;
    return (
        <Fragment>
            <img
                src={src}
                className="hover_image"
                alt={alt || src}
                onClick={() => setSelected(index)}
            />
            {selected && <div className="image_backdrop">
                <div className="image_navigation" onClick={() => setSelected(index - 1)}>
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <polygon points="0,10 20,20 20,0" className="arrow_triangle"/>
                    </svg>
                </div>
                <img
                    src={src}
                    className="fullscreen_image"
                    alt={alt || src}
                    onClick={() => setSelected(null)}
                />
                <div className="image_navigation" onClick={() => setSelected(index + 1)}>
                <svg width="20" height="20" viewBox="0 0 20 20">
                        <polygon points="20,10 0,20 0,0" className="arrow_triangle"/>
                    </svg>
                </div>
            </div>}
        </Fragment>
    );
}

export default GalleryImage;