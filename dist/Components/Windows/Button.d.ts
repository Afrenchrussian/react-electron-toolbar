import { ReactElement } from 'react';
interface Props {
    icon?: ReactElement | string;
    width?: number;
    hoverColor?: string;
    backgroundColor?: string;
}
declare function Button({ width, icon, hoverColor, backgroundColor }: Props): JSX.Element;
declare namespace Button {
    var defaultProps: {
        icon: string;
        width: number;
        hoverColor: string;
        backgroundColor: string;
    };
}
export default Button;
