/** @format */

import * as React from 'react';
import { useState } from 'react';
import MenuDropdownRow from './MenuDropdownRow';

export interface DropdownRow {
    title: string;
    extraText?: string | undefined;
    toSubMenu?: boolean;
    layout?: DropdownRow[];
    onClick?: () => void;
}

interface Props {
    open: boolean;
    layout: DropdownRow[];
    uniqueString: string;
    width?: number;
    subMenu?: boolean;
    subIndex?: number;
    rowHighlightColor?: string;
}

export default function MenuDropdown({
    width,
    open,
    layout,
    subMenu,
    subIndex,
    rowHighlightColor,
    uniqueString,
}: Props) {
    const [hover, setHover] = useState(false);

    function handleMouseEnter() {
        setHover(true);
    }

    function handleMouseExit() {
        setHover(false);
    }

    const isOpen = open || hover;

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
            className="windows-toolbar-menu-dropdown"
            style={{
                width,
                display: isOpen ? 'block' : 'none',
                left: subMenu ? '300px' : '',
                top: subMenu ? `${(subIndex || 0) * 30}px` : '',
            }}
        >
            {layout.map((cur, index) => (
                <MenuDropdownRow
                    key={`${cur.title}_${cur.extraText}_${uniqueString}`}
                    uniqueString={uniqueString}
                    highlightColor={rowHighlightColor || '#4b5360'}
                    index={index}
                    title={cur.title}
                    extraText={cur.extraText || ''}
                    toSubMenu={cur.toSubMenu}
                    layout={cur.layout}
                    onClick={cur.onClick}
                />
            ))}
        </div>
    );
}

MenuDropdown.defaultProps = {
    width: 300,
    subMenu: false,
    subIndex: 0,
    rowHighlightColor: '#4b5360',
};
