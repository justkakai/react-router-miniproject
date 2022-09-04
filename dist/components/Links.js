"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Links() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/" },
            react_1.default.createElement("h1", null, "Meet Me @ the Altar")),
        react_1.default.createElement("nav", { style: { textAlign: "center" } },
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "vocals", className: "instrument-links", style: ({ isActive }) => {
                    return {
                        color: isActive ? "#91ff00" : ""
                    };
                } }, "vocals"),
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "guitar-and-bass", className: "instrument-links", style: ({ isActive }) => {
                    return {
                        color: isActive ? "#91ff00" : ""
                    };
                } }, "guitar/ bass"),
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "drums", className: "instrument-links", style: ({ isActive }) => {
                    return {
                        color: isActive ? "#91ff00" : ""
                    };
                } }, "drums"))));
}
exports.default = Links;
//# sourceMappingURL=Links.js.map