/** @format */
/// <reference types="react" />
import { DropdownRow } from './MenuDropdown';
export interface MenuTileFormat {
    name: string;
    layout: DropdownRow[];
}
interface Props {
    openDropdownTrigger?: 'click' | 'hover';
    layout: MenuTileFormat[];
}
declare function Menu({ openDropdownTrigger, layout }: Props): JSX.Element;
declare namespace Menu {
    var defaultProps: {
        openDropdownTrigger: string;
    };
}
export default Menu;
