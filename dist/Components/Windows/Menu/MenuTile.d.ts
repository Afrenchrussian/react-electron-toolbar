/** @format */
/// <reference types="react" />
import { DropdownRow } from './MenuDropdown';
interface Props {
    name: string;
    openTrigger?: 'click' | 'hover';
    highlightColor?: string;
    highlightOpacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
    textColor?: string;
    layout: DropdownRow[];
}
declare function MenuTile({ name, highlightColor, textColor, highlightOpacity, openTrigger, layout, }: Props): JSX.Element;
declare namespace MenuTile {
    var defaultProps: {
        openTrigger: string;
        highlightColor: string;
        highlightOpacity: number;
        textColor: string;
    };
}
export default MenuTile;
