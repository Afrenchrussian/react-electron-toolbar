/** @format */

import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
// @ts-ignore
import Toolbar from 'react-electron-toolbar';
import { MenuTileFormat } from '../../src/Components/Windows/Menu/Menu';

const layout: MenuTileFormat[] = [
    {
        name: 'File',
        layout: [
            {
                title: 'New File',
                extraText: 'Ctrl+N',
            },
            {
                title: 'New Window',
                extraText: 'Ctrl+Shift+N',
            },
            {
                title: 'New Test',
                extraText: 'Ctrl+Shift+N',
                toSubMenu: true,
                layout: [
                    {
                        title: 'test',
                        extraText: 'yo',
                        onClick: () => console.log('yellow'),
                    },
                ],
            },
        ],
    },
];

ReactDOM.render(
    <React.StrictMode>
        <Toolbar
            layout={layout}
            icon={<img alt="logo" src={require('./logo192.png')} />}
        />
    </React.StrictMode>,
    document.getElementById('root'),
);
