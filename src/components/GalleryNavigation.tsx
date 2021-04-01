import React, { Fragment, useEffect, useState } from 'react';
import { useHistory, useRouteMatch, generatePath } from 'react-router-dom';
import { LoadedImage } from '../App';


interface GalleryNavigationProps {
    index: number,
    count: number,
    children?:
    | React.ReactChild
    | React.ReactChild[];
    gotoIndex: (n: number) => void;
}
const end_icon = <svg width="20" height="20" viewBox="0 0 20 20" className="arrow_svg">
    <polygon points="0,0 20,20 20,0 0,20" className="arrow_triangle" />
</svg>;

const arrow_icon = (inner: JSX.Element) => <svg width="20" height="20" viewBox="0 0 20 20" className="arrow_svg">
    {inner}
</svg>;

function GalleryNavigation({
    index, count, children, gotoIndex
}: GalleryNavigationProps) {

    return <div className="image_backdrop">
        <div className="image_navigation" onClick={() =>
            gotoIndex(index - 1)
        }>
            {index - 1 >= 0
                ? arrow_icon(<polygon points="0,10 20,20 20,0" className="arrow_triangle" />)
                : end_icon}
        </div>
        {children}
        <div className="image_navigation" onClick={() =>
            gotoIndex(index + 1)
        }>
            {index + 1 < count
                ? arrow_icon(<polygon points="20,10 0,20 0,0" className="arrow_triangle" />)
                : end_icon}
        </div>
    </div>

}

export default GalleryNavigation;