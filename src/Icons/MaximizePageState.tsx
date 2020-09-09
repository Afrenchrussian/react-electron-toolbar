import * as React from 'react';

interface Props {
    size?: number
    color?: string
}

export default function MaximizePageState({size, color}: Props) {
    return (
        <svg height={size || 10} width={size || 10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 343.55 337.49" style={{fill: color || "white"}}>
            <path
                d="M421.77,81.25H141V138H78.23v280.8H359v-56.7h62.74ZM337,396.75H100.23V160H337v236.8Zm62.74-56.7H359V138H163v-34.7h236.8Z"
                transform="translate(-78.23 -81.25)"/>
        </svg>
    )
}

MaximizePageState.defaultProps = {
    size: 10,
    color: "white"
}
