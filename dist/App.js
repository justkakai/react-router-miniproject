"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./routes/Home"));
const Vocals_1 = __importDefault(require("./routes/Vocals"));
const Guitar_Bass_1 = __importDefault(require("./routes/Guitar-Bass"));
const Drums_1 = __importDefault(require("./routes/Drums"));
const NotFound_1 = __importDefault(require("./routes/NotFound"));
const Links_1 = __importDefault(require("./components/Links"));
require("./App.css");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(Links_1.default, null),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "vocals", element: react_1.default.createElement(Vocals_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "guitar-and-bass", element: react_1.default.createElement(Guitar_Bass_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "drums", element: react_1.default.createElement(Drums_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "react-router-miniproject", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/" }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NotFound_1.default, null) }))));
}
exports.default = App;
//# sourceMappingURL=App.js.map