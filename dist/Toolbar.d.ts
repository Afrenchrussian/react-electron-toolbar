/** @format */
import { ReactElement } from 'react';
import './Css/Main.css';
import { MenuTileFormat } from './Components/Windows/Menu/Menu';
export declare type OS = 'WIN' | 'MAC' | 'LINUX';
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
export default function Toolbar({ color, defaultOS, forcedOS, icon, layout, }: Props): ReactElement;
export {};
