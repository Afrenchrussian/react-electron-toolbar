import * as React from 'react';

interface Props {
    size?: number
    color?: string
}

export default function SubMenuArrow({size, color}: Props) {
    return (
        <svg height={size || 10} width={size || 10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.6 337.49"
            style={{fill: color || "white"}}>
            <polygon className="cls-1"
                points="205.6 168.7 168.79 131.89 168.75 131.94 36.81 0 0 36.81 131.94 168.75 0 300.69 36.81 337.49 168.75 205.55 168.79 205.6 205.6 168.79 205.55 168.75 205.6 168.7"/>

        </svg>
    )
}

SubMenuArrow.defaultProps = {
    size: 10,
    color: "white"
}
