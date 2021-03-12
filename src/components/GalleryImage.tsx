import React, { Fragment, useRef, useEffect, useState } from 'react';
import { IndentStyle } from 'typescript';
import GalleryCounter from './GalleryCounter';
import { GalleryNavigation } from './GalleryNavigation';

interface GalleryImageProps {
    src: string,
    index: number,
    count: number,
    selected: boolean,
    setSelected: (n: number | null) => void,
    alt?: string,
}

function GalleryImage(props: GalleryImageProps) {
    const { alt, src, index, count, selected, setSelected } = props;

    const [isTall, setIsTall] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        if (imageRef && imageRef.current) {
            const height = imageRef.current.clientHeight;
            const width = imageRef.current.clientWidth;
            if (height > width) setIsTall(true);
            console.log(width, height);
        }
    }, [imageRef, setIsTall]);


    return (
        <Fragment>
            <img
                ref={imageRef}
                src={src}
                className="hover_image"
                alt={alt || src}
                onClick={() => setSelected(index)}
            />
            {selected && <Fragment>
                <GalleryCounter index={index} count={count} />
                <GalleryNavigation
                    index={index}
                    count={count}
                    setSelected={setSelected}
                >
                    <img
                        src={src}
                        className={isTall ? "tall_image" : "wide_image"}
                        alt={alt || src}
                        onClick={() => setSelected(null)}
                    />
                </GalleryNavigation>
            </Fragment>}
        </Fragment>
    );
}

export default GalleryImage;