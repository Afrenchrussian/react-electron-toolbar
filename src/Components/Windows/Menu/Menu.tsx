/** @format */

import * as React from 'react';
import MenuTile from './MenuTile';
import { DropdownRow } from './MenuDropdown';

export interface MenuTileFormat {
    name: string;
    layout: DropdownRow[];
}

interface Props {
    openDropdownTrigger?: 'click' | 'hover';
    layout: MenuTileFormat[];
}

export default function Menu({ openDropdownTrigger, layout }: Props) {
    return (
        <div className="windows-toolbar-menu">
            {layout.map((cur) => (
                <MenuTile
                    key={cur.name}
                    name={cur.name}
                    layout={cur.layout}
                    openTrigger={openDropdownTrigger}
                />
            ))}
        </div>
    );
}

Menu.defaultProps = {
    openDropdownTrigger: 'click',
};
