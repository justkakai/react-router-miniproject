"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const lost_png_1 = __importDefault(require("../images/lost.png"));
function NotFound() {
    let navigate = (0, react_router_dom_1.useNavigate)();
    return (react_1.default.createElement("div", { className: "details" },
        react_1.default.createElement("h2", { className: "not-found-h2" }, "you seem a bit ... lost?"),
        react_1.default.createElement("div", { className: "image-container-5" },
            react_1.default.createElement("img", { src: lost_png_1.default, alt: "are-you-lost" })),
        react_1.default.createElement("button", { className: "home-redirect", onClick: () => { navigate("/"); } }, "yes please take me home, i'm scared")));
}
exports.default = NotFound;
//# sourceMappingURL=NotFound.js.map