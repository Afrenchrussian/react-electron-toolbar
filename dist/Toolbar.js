'use strict';

var React = require('react');

function Button({ width, icon, hoverColor, backgroundColor }) {
    const [hover, setHover] = React.useState(false);
    function handleMouseEnter() {
        setHover(true);
    }
    function handleMouseExit() {
        setHover(false);
    }
    return (React.createElement("div", { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseExit, style: {
            width,
            backgroundColor: (hover) ? hoverColor || 'white' : backgroundColor || ''
        }, className: "windows-window-state-button" }, icon));
}
Button.defaultProps = {
    icon: "?",
    width: 50,
    hoverColor: "#5d6169",
    backgroundColor: "#2f343f"
};

function NormalPageState({ size, color }) {
    return (React.createElement("svg", { className: "svg-icon", height: size || 10, width: size || 10, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 280.79 280.79", style: { fill: color || "white" } },
        React.createElement("path", { d: "M390.4,390.4H109.6V109.6H390.4Zm-258.8-22H368.4V131.6H131.6Z", transform: "translate(-109.6 -109.6)" })));
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

var css_248z = ".windows-toolbar {\r\n    height: 35px;\r\n    width: 100%;\r\n}\r\n.windows-toolbar-state-buttons {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 100%;\r\n    float: right;\r\n}\r\n.windows-window-state-button {\r\n    height: 100%;\r\n    width: 50px;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-content: center;\r\n}\r\n.windows-window-state-button:hover {\r\n    cursor: pointer;\r\n}\r\n";
styleInject(css_248z);

function ExitPageState({ size, color }) {
    return (React.createElement("svg", { className: "svg-icon", height: size || 10, width: size || 10, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 280.79 280.79", style: { fill: color || "white" } },
        React.createElement("polygon", { points: "273.43 257.75 152.34 136.65 273.31 15.68 257.75 0.13 136.78 121.1 15.68 0 0.13 15.56 121.22 136.65 0 257.88 15.56 273.43 136.78 152.21 257.88 273.31 273.43 257.75" })));
}
ExitPageState.defaultProps = {
    size: 10,
    color: "white"
};

function MinimizePageState({ size, color }) {
    return (React.createElement("svg", { className: "svg-icon", height: size || 10, width: size || 10, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 280.79 22", style: { fill: color || "white" } },
        React.createElement("polygon", { points: "258.79 0 22 0 0 0 0 22 280.79 22 280.79 0 258.79 0" })));
}
MinimizePageState.defaultProps = {
    size: 10,
    color: "white"
};

function ToolbarWindows({ color }) {
    return (React.createElement("div", { className: "windows-toolbar", style: { backgroundColor: color || "#2f343f" } },
        React.createElement("div", { className: "windows-toolbar-state-buttons" },
            React.createElement(Button, { icon: React.createElement(MinimizePageState, null) }),
            React.createElement(Button, { icon: React.createElement(NormalPageState, null) }),
            React.createElement(Button, { hoverColor: "#e81123", icon: React.createElement(ExitPageState, null) }))));
}

var css_248z$1 = ".svg-icon {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n}\r\n";
styleInject(css_248z$1);

const platform = "win";
function Toolbar({ color, defaultOS, forcedOS }) {
    const selectedToolbar = (option) => {
        switch (option) {
            case "WIN":
                return React.createElement(ToolbarWindows, { color: color });
            case "MAC":
                return React.createElement("div", null, "MAC");
            case "LINUX":
                return React.createElement("div", null, "LINUX");
            default:
                return React.createElement("div", null, "ERROR: OS Not found");
        }
    };
    if (forcedOS) {
        return selectedToolbar(forcedOS);
    }
    const os = ["WIN", "MAC", "LINUX"].find(cur => platform.toUpperCase().includes(cur));
    return (os === undefined) ? selectedToolbar(defaultOS || "WIN") : selectedToolbar(os);
}

module.exports = Toolbar;
//# sourceMappingURL=Toolbar.js.map
