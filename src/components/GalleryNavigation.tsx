import React, { Fragment, useEffect, useState } from 'react';
import { useHistory, useRouteMatch, generatePath } from 'react-router-dom';
import { LoadedImage } from '../App';


interface GalleryNavigationProps {
    index: number,
    count: number,
    images: LoadedImage[],
    children?:
    | React.ReactChild
    | React.ReactChild[];
}
const end_icon = <svg width="20" height="20" viewBox="0 0 20 20" className="arrow_svg">
    <polygon points="0,0 20,20 20,0 0,20" className="arrow_triangle" />
</svg>;

const arrow_icon = (inner: JSX.Element) => <svg width="20" height="20" viewBox="0 0 20 20" className="arrow_svg">
    {inner}
</svg>;

function GalleryNavigation({
    index, count, children, images,
}: GalleryNavigationProps) {

    const history = useHistory();
    const match = useRouteMatch();
    
    const calcDelta = (e: Event) => {
        console.log(e)
    }

    useEffect(() => {
        window.addEventListener('scroll', calcDelta);
        return window.removeEventListener('scroll', calcDelta);
    }, []);

    const gotoIndex = (new_index: number) => {
        let new_image = images[new_index]
        if (!new_image) {
            history.goBack();
            return
        }
        let new_path = generatePath(match.path, {
            filename: new_image.filename
        });
        console.log(new_path)
        history.replace(new_path)
    }

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