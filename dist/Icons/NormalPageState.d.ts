/// <reference types="react" />
interface Props {
    size?: number;
    color?: string;
}
declare function NormalPageState({ size, color }: Props): JSX.Element;
declare namespace NormalPageState {
    var defaultProps: {
        size: number;
        color: string;
    };
}
export default NormalPageState;
