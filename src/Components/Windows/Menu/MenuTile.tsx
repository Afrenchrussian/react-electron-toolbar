/** @format */

import * as React from 'react';
import { useState } from 'react';
import MenuDropdown, { DropdownRow } from './MenuDropdown';

interface Props {
    name: string;
    openTrigger?: 'click' | 'hover';
    highlightColor?: string;
    highlightOpacity?:
        | 0
        | 0.1
        | 0.2
        | 0.3
        | 0.4
        | 0.5
        | 0.6
        | 0.7
        | 0.8
        | 0.9
        | 1;
    textColor?: string;
    layout: DropdownRow[];
}

export default function MenuTile({
    name,
    highlightColor,
    textColor,
    highlightOpacity,
    openTrigger,
    layout,
}: Props) {
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);

    function handleMouseEnter() {
        setHover(true);
    }

    function handleMouseClick() {
        setClicked(true);
    }

    function handleMouseExit() {
        setHover(false);
        setClicked(false);
    }

    const openDropdown = (): boolean => {
        if (openTrigger === 'hover' && hover) return true;
        return openTrigger === 'click' && clicked && hover;
    };

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
            role="button"
            tabIndex={0}
            onClick={handleMouseClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
            className="windows-toolbar-menu-tile"
            style={{ color: textColor }}
        >
            <p className="windows-toolbar-menu-tile-text">{name}</p>
            <div
                className="windows-toolbar-menu-tile-highlight"
                style={{
                    backgroundColor: highlightColor,
                    opacity: highlightOpacity,
                    display: hover ? 'block' : 'none',
                }}
            />
            <MenuDropdown
                open={openDropdown()}
                uniqueString={name}
                layout={layout}
            />
        </div>
    );
}

MenuTile.defaultProps = {
    openTrigger: 'click',
    highlightColor: 'white',
    highlightOpacity: 0.1,
    textColor: 'white',
};
