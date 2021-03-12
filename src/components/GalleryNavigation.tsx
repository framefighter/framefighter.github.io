import React, { FunctionComponent } from 'react';


interface GalleryNavigationProps {
    index: number,
    count: number,
    setSelected: (n: number | null) => void,
}

export const GalleryNavigation: FunctionComponent<GalleryNavigationProps> = ({
    index, count, setSelected, children
}) => {


    return <div className="image_backdrop">
        <div className="image_navigation" onClick={() => setSelected(index - 1)}>
            {index - 1 >= 0 &&
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <polygon points="0,10 20,20 20,0" className="arrow_triangle" />
                </svg>
            }
        </div>
        {children}
        <div className="image_navigation" onClick={() => setSelected(index + 1)}>
            {index + 1 < count &&
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <polygon points="20,10 0,20 0,0" className="arrow_triangle" />
                </svg>
            }
        </div>
    </div>
}