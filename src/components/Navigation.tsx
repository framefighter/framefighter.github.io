import React, { Fragment } from 'react';
import { Link, NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import { Site } from '../App';
import { capitalizeSite } from '../utils';

interface NavigationProps {
    sites: Site[],
    className?: string,
}

function Navigation(props: NavigationProps) {
    const { sites, className } = props;

    return <Fragment>
        <div className={className + " navigation"}>
            {sites.map(s => {
                return <NavLink
                    key={s.path}
                    to={s.path}
                    activeClassName={"selected_site"}
                >
                    {capitalizeSite(s.name)}
                </NavLink>
            })}
        </div >
    </Fragment>
}

export default Navigation;