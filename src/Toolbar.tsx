/** @format */

import * as React from 'react';
import { ReactElement } from 'react';
import { ToolbarWindows } from './Components/Windows/ToolbarWindows';
import './Css/Main.css';
import { MenuTileFormat } from './Components/Windows/Menu/Menu';

const { remote } = window.require('electron');
const { platform } = remote.process;
const currentWindow = remote.getCurrentWindow();

export type OS = 'WIN' | 'MAC' | 'LINUX';

interface Props {
    layout: MenuTileFormat[];
    icon?: ReactElement;
    color?: string;
    forcedOS?: OS;
    defaultOS?: OS;
    showMinimizeButton?: boolean;
    showMaximizeButton?: boolean;
    showExitButton?: boolean;
}

// const platform = 'win';

export default function Toolbar({
    color,
    defaultOS,
    forcedOS,
    icon,
    layout,
}: Props): ReactElement {
    const selectedToolbar = (option: OS): ReactElement => {
        switch (option) {
            case 'WIN':
                return (
                    <ToolbarWindows
                        layout={layout}
                        color={color}
                        icon={icon}
                        isMaximized={currentWindow.isMaximized()}
                    />
                );
            case 'MAC':
                return <div>MAC</div>;
            case 'LINUX':
                return <div>LINUX</div>;
            default:
                return <div>ERROR: OS Not found</div>;
        }
    };
    if (forcedOS) {
        return selectedToolbar(forcedOS);
    }
    const os = ['WIN', 'MAC', 'LINUX'].find((cur) =>
        platform.toUpperCase().includes(cur),
    );
    return os === undefined
        ? selectedToolbar(defaultOS || 'WIN')
        : selectedToolbar(os as OS);
}
