/** @format */
import { ReactElement } from 'react';
import '../../Css/ToolbarWindows.css';
import { MenuTileFormat } from './Menu/Menu';
export interface WindowsProps {
    layout: MenuTileFormat[];
    icon?: ReactElement;
    color?: string;
}
export declare function ToolbarWindows({ color, icon, layout }: WindowsProps): JSX.Element;
