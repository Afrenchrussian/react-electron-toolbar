import { ReactElement } from 'react';
interface Props {
    icon?: ReactElement | string;
    width?: number;
    hoverColor?: string;
    backgroundColor?: string;
    onClick: () => void;
}
declare function Button({ width, icon, hoverColor, backgroundColor, onClick }: Props): JSX.Element;
declare namespace Button {
    var defaultProps: {
        icon: string;
        width: number;
        hoverColor: string;
        backgroundColor: string;
    };
}
export default Button;
