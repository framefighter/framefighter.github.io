import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { LoadedImage, Site } from '../App';
import GalleryImage from './GalleryImage';
import ImageGrid from './ImageGrid';
import Navigation from './Navigation';

interface ImageGalleryProps<T> {
    images: Array<T>,
    hideNavigation?: boolean,
    fixed?: boolean,
}

function ImageGallery(props: ImageGalleryProps<LoadedImage>) {
    const { images, hideNavigation, fixed } = props;
    const [workSites, setWorkSites] = useState<Site[]>([]);
    const match = useRouteMatch();


    useEffect(() => {
        const folders = images.filter(Boolean).map(i => i.category);
        const sites = Array.from(new Set(folders).values()).map(i => ({
            name: i,
            path: "/" + i,
        }));
        setWorkSites(sites)
    }, [setWorkSites, images])

    const filter_images = (category?: string) => {
        return images
            .filter(image => !category || image.category === category)
    };


    return (<div className="gallery_content">
        {!hideNavigation && <Navigation
            sites={workSites.map(w => ({ ...w, path: match.path + w.path }))}
            className="gallery_navigation"
        />}
        <div className="image_gallery">
            <Switch>
                <Route
                    exact
                    path={match.path}
                >
                    <ImageGrid
                        images={images}
                        fixed={fixed}
                    />
                </Route>
                <Route
                    exact
                    path={match.path + "/image/:filename"}
                >
                    <ImageGrid
                        images={images}
                    />
                </Route>
                {workSites.map(s => <Route
                    exact
                    key={s.path}
                    path={match.path + s.path}
                >
                    <ImageGrid
                        images={filter_images(s.name)}
                    />

                </Route>).reverse()}
                {workSites.map(s => <Route
                    key={s.path}
                    path={match.path + s.path + "/image/:filename"}
                >
                    <ImageGrid
                        images={filter_images(s.name)}
                    />

                </Route>).reverse()}
            </Switch>
        </div>
    </div>);
}

export default ImageGallery;
