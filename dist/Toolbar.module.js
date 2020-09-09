import { useState, createElement, Fragment } from 'react';

function Button({ width, icon, hoverColor, backgroundColor, onClick }) {
    const [hover, setHover] = useState(false);
    function handleMouseEnter() {
        setHover(true);
    }
    function handleMouseExit() {
        setHover(false);
    }
    return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    createElement("div", { role: "button", tabIndex: 0, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseExit, style: {
            width,
            backgroundColor: (hover) ? hoverColor || 'white' : backgroundColor || ''
        }, onClick: () => onClick(), className: "windows-window-state-button" }, icon));
}
Button.defaultProps = {
    icon: "?",
    width: 50,
    hoverColor: "#5d6169",
    backgroundColor: "#2f343f"
};

function NormalPageState({ size, color }) {
    return (createElement("svg", { className: "svg-icon", height: size || 10, width: size || 10, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 280.79 280.79", style: { fill: color || "white" } },
        createElement("path", { d: "M390.4,390.4H109.6V109.6H390.4Zm-258.8-22H368.4V131.6H131.6Z", transform: "translate(-109.6 -109.6)" })));
}
NormalPageState.defaultProps = {
    size: 10,
    color: "white"
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".windows-toolbar {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    height: 35px;\r\n    width: 100%;\r\n}\r\n.windows-toolbar-first-section {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.windows-toolbar-state-buttons {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 100%;\r\n}\r\n.windows-window-state-button {\r\n    height: 100%;\r\n    width: 50px;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-content: center;\r\n}\r\n.windows-window-state-button:hover {\r\n    cursor: pointer;\r\n}\r\n.windows-toolbar-icon {\r\n    height: 35px;\r\n    width: 45px;\r\n    display: grid;\r\n}\r\n.windows-toolbar-icon img {\r\n    height: 25px;\r\n    margin: auto;\r\n}\r\n/* Menu */\r\n.windows-toolbar-menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.windows-toolbar-menu-tile {\r\n    display: grid;\r\n    grid-template-columns: 100%;\r\n    font-family: Arial, serif;\r\n    line-height: 35px;\r\n    text-transform: capitalize;\r\n    text-align: center;\r\n}\r\n.windows-toolbar-menu-tile-highlight {\r\n    grid-area: 1 / 1 / 2 / 2;\r\n    height: 35px;\r\n}\r\n.windows-toolbar-menu-tile-text {\r\n    grid-area: 1 / 1 / 2 / 2;\r\n    margin: 0 15px 0 15px;\r\n}\r\n.windows-toolbar-menu-tile:hover {\r\n    cursor: pointer;\r\n}\r\n.windows-toolbar-menu-dropdown {\r\n    position: absolute;\r\n    background-color: #3a404c;\r\n    padding: 10px 0px;\r\n    top: 35px;\r\n}\r\n.windows-toolbar-menu-dropdown-row {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    height: 30px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n.windows-toolbar-menu-dropdown-row div {\r\n    line-height: 30px;\r\n}";
styleInject(css_248z);

function ExitPageState({ size, color }) {
    return (createElement("svg", { className: "svg-icon", height: size || 10, width: size || 10, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 280.79 280.79", style: { fill: color || "white" } },
        createElement("polygon", { points: "273.43 257.75 152.34 136.65 273.31 15.68 257.75 0.13 136.78 121.1 15.68 0 0.13 15.56 121.22 136.65 0 257.88 15.56 273.43 136.78 152.21 257.88 273.31 273.43 257.75" })));
}
ExitPageState.defaultProps = {
    size: 10,
    color: "white"
};

function MinimizePageState({ size, color }) {
    return (createElement("svg", { className: "svg-icon", height: size || 10, width: size || 10, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 280.79 22", style: { fill: color || "white" } },
        createElement("polygon", { points: "258.79 0 22 0 0 0 0 22 280.79 22 280.79 0 258.79 0" })));
}
MinimizePageState.defaultProps = {
    size: 10,
    color: "white"
};

function MaximizePageState({ size, color }) {
    return (createElement("svg", { height: size || 10, width: size || 10, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 343.55 337.49", style: { fill: color || "white" } },
        createElement("path", { d: "M421.77,81.25H141V138H78.23v280.8H359v-56.7h62.74ZM337,396.75H100.23V160H337v236.8Zm62.74-56.7H359V138H163v-34.7h236.8Z", transform: "translate(-78.23 -81.25)" })));
}
MaximizePageState.defaultProps = {
    size: 10,
    color: "white"
};

function SubMenuArrow({ size, color }) {
    return (createElement("svg", { height: size || 10, width: size || 10, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 205.6 337.49", style: { fill: color || "white" } },
        createElement("polygon", { className: "cls-1", points: "205.6 168.7 168.79 131.89 168.75 131.94 36.81 0 0 36.81 131.94 168.75 0 300.69 36.81 337.49 168.75 205.55 168.79 205.6 205.6 168.79 205.55 168.75 205.6 168.7" })));
}
SubMenuArrow.defaultProps = {
    size: 10,
    color: "white"
};

/** @format */
function MenuDropdownRow({ title, extraText, toSubMenu, layout, index, highlightColor, onClick, uniqueString, }) {
    const [hover, setHover] = useState(false);
    function handleMouseEnter() {
        setHover(true);
    }
    function handleMouseExit() {
        setHover(false);
    }
    return (createElement(Fragment, null,
        createElement("div", { role: "button", tabIndex: 0, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseExit, onClick: () => {
                if (onClick === undefined)
                    return;
                onClick();
            }, className: "windows-toolbar-menu-dropdown-row", style: { backgroundColor: hover ? highlightColor : '' } },
            createElement("div", null, title),
            createElement("div", null, toSubMenu ? createElement(SubMenuArrow, null) : extraText)),
        toSubMenu && layout ? (createElement(MenuDropdown, { open: hover, layout: layout, subMenu: true, subIndex: index, uniqueString: uniqueString, rowHighlightColor: highlightColor })) : (createElement(Fragment, null))));
}
MenuDropdownRow.defaultProps = {
    extraText: '',
    subMenu: false,
    layout: null,
};

/** @format */
function MenuDropdown({ width, open, layout, subMenu, subIndex, rowHighlightColor, uniqueString, }) {
    const [hover, setHover] = useState(false);
    function handleMouseEnter() {
        setHover(true);
    }
    function handleMouseExit() {
        setHover(false);
    }
    const isOpen = open || hover;
    return (createElement("div", { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseExit, className: "windows-toolbar-menu-dropdown", style: {
            width,
            display: isOpen ? 'block' : 'none',
            left: subMenu ? '300px' : '',
            top: subMenu ? `${(subIndex || 0) * 30}px` : '',
        } }, layout.map((cur, index) => (createElement(MenuDropdownRow, { key: `${cur.title}_${cur.extraText}_${uniqueString}`, uniqueString: uniqueString, highlightColor: rowHighlightColor || '#4b5360', index: index, title: cur.title, extraText: cur.extraText || '', toSubMenu: cur.toSubMenu, layout: cur.layout, onClick: cur.onClick })))));
}
MenuDropdown.defaultProps = {
    width: 300,
    subMenu: false,
    subIndex: 0,
    rowHighlightColor: '#4b5360',
};

/** @format */
function MenuTile({ name, highlightColor, textColor, highlightOpacity, openTrigger, layout, }) {
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    function handleMouseEnter() {
        setHover(true);
    }
    function handleMouseClick() {
        setClicked(true);
    }
    function handleMouseExit() {
        setHover(false);
        setClicked(false);
    }
    const openDropdown = () => {
        if (openTrigger === 'hover' && hover)
            return true;
        return openTrigger === 'click' && clicked && hover;
    };
    return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    createElement("div", { role: "button", tabIndex: 0, onClick: handleMouseClick, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseExit, className: "windows-toolbar-menu-tile", style: { color: textColor } },
        createElement("p", { className: "windows-toolbar-menu-tile-text" }, name),
        createElement("div", { className: "windows-toolbar-menu-tile-highlight", style: {
                backgroundColor: highlightColor,
                opacity: highlightOpacity,
                display: hover ? 'block' : 'none',
            } }),
        createElement(MenuDropdown, { open: openDropdown(), uniqueString: name, layout: layout })));
}
MenuTile.defaultProps = {
    openTrigger: 'click',
    highlightColor: 'white',
    highlightOpacity: 0.1,
    textColor: 'white',
};

/** @format */
function Menu({ openDropdownTrigger, layout }) {
    return (createElement("div", { className: "windows-toolbar-menu" }, layout.map((cur) => (createElement(MenuTile, { key: cur.name, name: cur.name, layout: cur.layout, openTrigger: openDropdownTrigger })))));
}
Menu.defaultProps = {
    openDropdownTrigger: 'click',
};

/** @format */
function ToolbarWindows({ color, icon, layout }) {
    const [maximized, setMaximized] = useState(true);
    return (createElement("div", { className: "drag windows-toolbar", style: { backgroundColor: color || '#2f343f' } },
        createElement("div", { className: "windows-toolbar-first-section no-drag" },
            createElement("div", { className: "drag windows-toolbar-icon" }, icon || createElement(Fragment, null)),
            createElement(Menu, { layout: layout })),
        createElement("div", { className: "windows-toolbar-state-buttons no-drag" },
            createElement(Button, { icon: createElement(MinimizePageState, null), onClick: () => { } }),
            maximized ? (createElement(Button, { icon: createElement(MaximizePageState, null), onClick: () => setMaximized(false) })) : (createElement(Button, { icon: createElement(NormalPageState, null), onClick: () => setMaximized(true) })),
            createElement(Button, { hoverColor: "#e81123", icon: createElement(ExitPageState, null), onClick: () => { } }))));
}

var css_248z$1 = ".drag {\r\n    -webkit-app-region: drag;\r\n}\r\n.no-drag {\r\n    -webkit-app-region: no-drag;\r\n}\r\n";
styleInject(css_248z$1);

/** @format */
const electron = window.require('electron');
const { platform } = electron.remote.process;
// const platform = 'win';
function Toolbar({ color, defaultOS, forcedOS, icon, layout, }) {
    const selectedToolbar = (option) => {
        switch (option) {
            case 'WIN':
                return (createElement(ToolbarWindows, { layout: layout, color: color, icon: icon }));
            case 'MAC':
                return createElement("div", null, "MAC");
            case 'LINUX':
                return createElement("div", null, "LINUX");
            default:
                return createElement("div", null, "ERROR: OS Not found");
        }
    };
    if (forcedOS) {
        return selectedToolbar(forcedOS);
    }
    const os = ['WIN', 'MAC', 'LINUX'].find((cur) => platform.toUpperCase().includes(cur));
    return os === undefined
        ? selectedToolbar(defaultOS || 'WIN')
        : selectedToolbar(os);
}

export default Toolbar;
//# sourceMappingURL=Toolbar.module.js.map
