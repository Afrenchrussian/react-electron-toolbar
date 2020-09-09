/// <reference types="react" />
interface Props {
    size?: number;
    color?: string;
}
declare function MinimizePageState({ size, color }: Props): JSX.Element;
declare namespace MinimizePageState {
    var defaultProps: {
        size: number;
        color: string;
    };
}
export default MinimizePageState;
