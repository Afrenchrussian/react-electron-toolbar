import * as React from 'react';

interface Props {
    size?: number
    color?: string
}

export default function NormalPageState({size, color}: Props) {
    return (
        <svg className="svg-icon" height={size || 10} width={size || 10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.79 280.79" style={{fill: color || "white"}}>
            <path d="M390.4,390.4H109.6V109.6H390.4Zm-258.8-22H368.4V131.6H131.6Z" transform="translate(-109.6 -109.6)"/>
        </svg>
    )
}

NormalPageState.defaultProps = {
    size: 10,
    color: "white"
}

