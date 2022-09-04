"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ada_juarez_drums_jpg_1 = __importDefault(require("../images/ada-juarez-drums.jpg"));
function Drums() {
    return (react_1.default.createElement("div", { className: "details" },
        react_1.default.createElement("div", { className: "image-container" },
            react_1.default.createElement("img", { src: ada_juarez_drums_jpg_1.default, alt: "ada-juarez-drums" })),
        react_1.default.createElement("h2", null, "ada juarez"),
        react_1.default.createElement("h3", null, "drums")));
}
exports.default = Drums;
//# sourceMappingURL=Drums.js.map