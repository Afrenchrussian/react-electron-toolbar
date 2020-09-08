import * as React from 'react';
import Button from "./Button";
import NormalPageState from "../../Icons/NormalPageState";
import '../../Css/ToolbarWindows.css'
import ExitPageState from "../../Icons/ExitPageState";
import MinimizePageState from "../../Icons/MinimizePageState";

export interface Props {
    color?: string
}

export function ToolbarWindows({color}: Props) {
    return (
        <div className="windows-toolbar" style={{backgroundColor: color || "#2f343f"}}>
            <div className="windows-toolbar-state-buttons">
                <Button icon={<MinimizePageState/>}/>
                <Button icon={<NormalPageState/>}/>
                <Button hoverColor="#e81123" icon={<ExitPageState/>}/>
            </div>
        </div>
    );
}
