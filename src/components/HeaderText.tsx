import React from "react";
import { useRouteMatch } from 'react-router';
import { useLocation } from 'react-router-dom';
import { capitalizeSite } from '../utils';

interface HeaderTextProps {
    title: string
}

function HeaderText(props: HeaderTextProps) {
    const { title } = props;
    const location = useLocation();
    return <header className="app-header">
        <h1 className="header_text">{capitalizeSite(location.pathname)}</h1>
    </header>
}

export default HeaderText;

