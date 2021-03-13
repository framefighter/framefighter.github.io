import React from 'react';

interface SiteNavigationProps {
    sites: string[],
    site: string,
    setSite: (site: string) => void,
}

function SiteNavigation(props: SiteNavigationProps) {
    const { setSite, site, sites } = props;

    return <ul className="site_navigation">
        {sites.map(s => <li key={s}><a
            href="?#"
            onClick={() => setSite(s)}
            className={s === site ? "selected_site" : undefined}
        >
            {s}
        </a></li>)}
    </ul >
}

export default SiteNavigation;