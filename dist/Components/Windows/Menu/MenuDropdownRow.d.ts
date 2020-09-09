/** @format */
/// <reference types="react" />
import { DropdownRow } from './MenuDropdown';
export interface DropdownRowProps {
    index: number;
    title: string;
    uniqueString: string;
    onClick?: () => void;
    extraText?: string | undefined;
    toSubMenu?: boolean;
    layout?: DropdownRow[];
    highlightColor: string;
}
declare function MenuDropdownRow({ title, extraText, toSubMenu, layout, index, highlightColor, onClick, uniqueString, }: DropdownRowProps): JSX.Element;
declare namespace MenuDropdownRow {
    var defaultProps: {
        extraText: string;
        subMenu: boolean;
        layout: null;
    };
}
export default MenuDropdownRow;
