"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const mmta_jpg_1 = __importDefault(require("../images/mmta.jpg"));
function Home() {
    return (react_1.default.createElement("div", { className: "details" },
        react_1.default.createElement("div", { className: "image-container-4" },
            react_1.default.createElement("img", { src: mmta_jpg_1.default, alt: "mmta-group" })),
        react_1.default.createElement("p", { className: "on-tour" }, "\uD83D\uDFE2 on tour"),
        react_1.default.createElement("a", { href: "https://www.meetmeatthealtar.com/tour", target: "_blank", rel: "noreferrer", className: "buy-tickets" }, "PURCHASE TICKETS")));
}
exports.default = Home;
//# sourceMappingURL=Home.js.map