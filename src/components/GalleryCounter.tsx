import React from 'react';


interface GalleryCounterProps {
    index: number,
    count: number,
}

function GalleryCounter(props: GalleryCounterProps) {
    const { index, count } = props;
    return <div className="gallery_counter" >{index + 1}/{count}</div>
}

export default GalleryCounter;