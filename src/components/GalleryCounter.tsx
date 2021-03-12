import React, { Fragment, useRef, useEffect, useState } from 'react';


interface GalleryCounterProps {
    index: number,
    count: number,
}

function GalleryCounter(props: GalleryCounterProps) {
    const {index, count} = props;
    return <div>{index}/{count}</div>
}

export default GalleryCounter;