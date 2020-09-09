/** @format */
/// <reference types="react" />
export interface DropdownRow {
    title: string;
    extraText?: string | undefined;
    toSubMenu?: boolean;
    layout?: DropdownRow[];
    onClick?: () => void;
}
interface Props {
    open: boolean;
    layout: DropdownRow[];
    uniqueString: string;
    width?: number;
    subMenu?: boolean;
    subIndex?: number;
    rowHighlightColor?: string;
}
declare function MenuDropdown({ width, open, layout, subMenu, subIndex, rowHighlightColor, uniqueString, }: Props): JSX.Element;
declare namespace MenuDropdown {
    var defaultProps: {
        width: number;
        subMenu: boolean;
        subIndex: number;
        rowHighlightColor: string;
    };
}
export default MenuDropdown;
