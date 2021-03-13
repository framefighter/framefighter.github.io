import React, { useState, useEffect, Fragment } from 'react';
import { LoadedImage } from '../App';
import GalleryImage from './GalleryImage';
import SiteNavigation from './SiteNavigation';

interface ImageGalleryProps<T> {
    images: Array<T>,
}



function ImageGallery(props: ImageGalleryProps<LoadedImage>) {
    const { images } = props;
    const [selected, setSelected] = useState<number | null>(null);
    const [workSite, setWorkSite] = useState<string | null>(null);
    const [workSites, setWorkSites] = useState<string[]>([]);
    useEffect(() => {
        const folders = images.map(i => i.category);
        const sites = Array.from(new Set(folders).values());
        setWorkSites(sites)
        setWorkSite(sites[0] || null)
    }, [setWorkSites, images])

    const images_el = images
        .filter(i => i.category === workSite)
        .map((image, ind) => <div
            key={ind}
            className="image_preview">
            <GalleryImage
                index={ind}
                count={images.filter(i => i.category === workSite).length}
                src={image.src}
                selected={ind === selected}
                setSelected={n => { setSelected(n) }}
            />
        </div>);

    return (<Fragment>
        <div className="work_navigation">
            <SiteNavigation setSite={setWorkSite} site={workSite} sites={workSites} />
        </div>
        <section className="image_gallery">
            {images_el}
        </section>
    </Fragment>);
}

export default ImageGallery;