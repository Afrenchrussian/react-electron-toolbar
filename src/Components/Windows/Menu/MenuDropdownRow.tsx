/** @format */

import * as React from 'react';
import { useState } from 'react';
import SubMenuArrow from '../../../Icons/SubMenuArrow';
import MenuDropdown, { DropdownRow } from './MenuDropdown';

export interface DropdownRowProps {
    index: number;
    title: string;
    uniqueString: string;
    onClick?: () => void;
    extraText?: string | undefined;
    toSubMenu?: boolean;
    layout?: DropdownRow[];
    highlightColor: string;
}

export default function MenuDropdownRow({
    title,
    extraText,
    toSubMenu,
    layout,
    index,
    highlightColor,
    onClick,
    uniqueString,
}: DropdownRowProps) {
    const [hover, setHover] = useState(false);

    function handleMouseEnter() {
        setHover(true);
    }

    function handleMouseExit() {
        setHover(false);
    }

    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
                role="button"
                tabIndex={0}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseExit}
                onClick={() => {
                    if (onClick === undefined) return;
                    onClick();
                }}
                className="windows-toolbar-menu-dropdown-row"
                style={{ backgroundColor: hover ? highlightColor : '' }}
            >
                <div>{title}</div>
                <div>{toSubMenu ? <SubMenuArrow /> : extraText}</div>
            </div>
            {toSubMenu && layout ? (
                <MenuDropdown
                    open={hover}
                    layout={layout}
                    subMenu
                    subIndex={index}
                    uniqueString={uniqueString}
                    rowHighlightColor={highlightColor}
                />
            ) : (
                <></>
            )}
        </>
    );
}

MenuDropdownRow.defaultProps = {
    extraText: '',
    subMenu: false,
    layout: null,
};
