import React, { Fragment, useRef, useEffect, useState } from 'react';
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
function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function GalleryImage(props: GalleryImageProps) {
    const { alt, index, count, selected, setSelected } = props;
    const [isTall, setIsTall] = useState(false);
    const [src, setSrc] = useState(props.src);
    const imageRef = useRef(null);



    useEffect(() => {
        const width = getRandomSize(100, 3000);
        const height = getRandomSize(200, 2000);
        setSrc("https://placekitten.com/" + width + "/" + height);
    }, [])



    useEffect(() => {
        if (imageRef && imageRef.current) {
            const height = imageRef.current.clientHeight;
            const width = imageRef.current.clientWidth;
            if (height >= width) setIsTall(true);
            console.log(width, height, index);
        }
    }, [imageRef, setIsTall]);


    return (
        <Fragment>
            <div
                style={{backgroundImage: `url(${src})`}}
                className="hover_image"
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
                        style={{backgroundImage: `url(${src})`}}
                        className="fullscreen_image"
                        onClick={() => setSelected(null)}
                    />
                </GalleryNavigation>
            </Fragment>}
        </Fragment>
    );
}

export default GalleryImage;