import * as React from 'react';

interface Props {
    size?: number
    color?: string
}

export default function MinimizePageState({size, color}: Props) {
    return (
        <svg className="svg-icon" height={size || 10} width={size || 10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.79 22" style={{fill: color || "white"}}>
            <polygon points="258.79 0 22 0 0 0 0 22 280.79 22 280.79 0 258.79 0"/>
        </svg>
    )
}

MinimizePageState.defaultProps = {
    size: 10,
    color: "white"
}
