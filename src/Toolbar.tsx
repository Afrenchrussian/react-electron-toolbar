import * as React from 'react';
import {ToolbarProps} from "../types/Toolbar";
const electron = require('electron').remote;

export default function Toolbar(props : ToolbarProps) {
    console.log(electron);
    return (
        <div>lel</div>
    );
};
