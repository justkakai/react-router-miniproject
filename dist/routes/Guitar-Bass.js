"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const tea_campbell_guitar_bass_jpg_1 = __importDefault(require("../images/tea-campbell-guitar-bass.jpg"));
function GuitarBass() {
    return (react_1.default.createElement("div", { className: "details" },
        react_1.default.createElement("div", { className: "image-container" },
            react_1.default.createElement("img", { src: tea_campbell_guitar_bass_jpg_1.default, alt: "tea-campbell-guitar-bass" })),
        react_1.default.createElement("h2", null, "t\u00E9a campbell"),
        react_1.default.createElement("h3", null, "guitar / bass")));
}
exports.default = GuitarBass;
//# sourceMappingURL=Guitar-Bass.js.map