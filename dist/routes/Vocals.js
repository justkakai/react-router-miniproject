"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const edith_victoria_vocals_jpg_1 = __importDefault(require("../images/edith-victoria-vocals.jpg"));
function Vocals() {
    return (react_1.default.createElement("div", { className: "details" },
        react_1.default.createElement("div", { className: "image-container-1" },
            react_1.default.createElement("img", { src: edith_victoria_vocals_jpg_1.default, alt: "edith-victoria-vocals" })),
        react_1.default.createElement("h2", null, "edith victoria"),
        react_1.default.createElement("h3", null, "vocals")));
}
exports.default = Vocals;
//# sourceMappingURL=Vocals.js.map