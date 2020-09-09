import * as React from 'react';
import {ReactElement, useState} from 'react';

interface Props {
    icon?: ReactElement | string
    width?: number
    hoverColor?: string
    backgroundColor?: string
    onClick: () => void
}

export default function Button({width, icon, hoverColor, backgroundColor, onClick}: Props) {
    const [hover, setHover] = useState(false);

    function handleMouseEnter() {
        setHover(true)
    }

    function handleMouseExit() {
        setHover(false)
    }

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
            role="button"
            tabIndex={0}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
            style={{
                width,
                backgroundColor: (hover) ? hoverColor || 'white' : backgroundColor || ''
            }}
            onClick={() => onClick()}
            className="windows-window-state-button"
        >
            {icon}
        </div>
    );
}

Button.defaultProps = {
    icon: "?",
    width: 50,
    hoverColor: "#5d6169",
    backgroundColor: "#2f343f"
}
