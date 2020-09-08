import { ReactElement } from 'react';
interface Props {
    content: ReactElement | ReactElement[];
    size?: number;
    color?: string;
}
declare function SvgIcon({ size, color, content }: Props): JSX.Element;
declare namespace SvgIcon {
    var defaultProps: {
        size: number;
        color: string;
    };
}
export default SvgIcon;
