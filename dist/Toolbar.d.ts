import { ReactElement } from "react";
import './Css/Main.css';
export declare type OS = "WIN" | "MAC" | "LINUX";
interface Props {
    color?: string;
    forcedOS?: OS;
    defaultOS?: OS;
    showMinimizeButton?: boolean;
    showMaximizeButton?: boolean;
    showExitButton?: boolean;
}
export default function Toolbar({ color, defaultOS, forcedOS }: Props): ReactElement;
export {};
