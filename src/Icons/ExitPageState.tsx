import * as React from 'react';

interface Props {
    size?: number
    color?: string
}

export default function ExitPageState({size, color}: Props) {
    return (
        <svg className="svg-icon" height={size || 10} width={size || 10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.79 280.79" style={{fill: color || "white"}}>
            <polygon
                points="273.43 257.75 152.34 136.65 273.31 15.68 257.75 0.13 136.78 121.1 15.68 0 0.13 15.56 121.22 136.65 0 257.88 15.56 273.43 136.78 152.21 257.88 273.31 273.43 257.75"/>
        </svg>
    )
}

ExitPageState.defaultProps = {
    size: 10,
    color: "white"
}
