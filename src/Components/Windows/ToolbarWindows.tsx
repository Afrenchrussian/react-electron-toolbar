/** @format */

import * as React from 'react';
import { ReactElement, useState } from 'react';
import Button from './Button';
import NormalPageState from '../../Icons/NormalPageState';
import '../../Css/ToolbarWindows.css';
import ExitPageState from '../../Icons/ExitPageState';
import MinimizePageState from '../../Icons/MinimizePageState';
import MaximizePageState from '../../Icons/MaximizePageState';
import Menu, { MenuTileFormat } from './Menu/Menu';

const currentWindow = window.require('electron').remote.getCurrentWindow();

export interface WindowsProps {
    isMaximized: boolean;
    layout?: MenuTileFormat[];
    icon?: ReactElement;
    color?: string;
}

export function ToolbarWindows({
    color,
    icon,
    layout,
    isMaximized,
}: WindowsProps) {
    const [maximized, setMaximized] = useState(isMaximized);

    return (
        <div
            className="drag windows-toolbar"
            style={{ backgroundColor: color || '#2f343f' }}
        >
            <div className="windows-toolbar-first-section no-drag">
                <div className="drag windows-toolbar-icon">{icon || <></>}</div>
                {layout ? <Menu layout={layout} /> : <></>}
            </div>
            <div className="windows-toolbar-state-buttons no-drag">
                <Button
                    icon={<MinimizePageState />}
                    onClick={() => {
                        currentWindow.minimize();
                    }}
                />
                {maximized ? (
                    <Button
                        icon={<MaximizePageState />}
                        onClick={() => {
                            setMaximized(false);
                            currentWindow.unmaximize();
                        }}
                    />
                ) : (
                    <Button
                        icon={<NormalPageState />}
                        onClick={() => {
                            setMaximized(true);
                            currentWindow.maximize();
                        }}
                    />
                )}
                <Button
                    hoverColor="#e81123"
                    icon={<ExitPageState />}
                    onClick={() => {
                        currentWindow.close();
                    }}
                />
            </div>
        </div>
    );
}
