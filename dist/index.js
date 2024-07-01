"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.underlineShadow = void 0;
var flattenColorPalette_1 = __importDefault(require("tailwindcss/lib/util/flattenColorPalette"));
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var underlineShadow = (0, plugin_1.default)(function (_a) {
    var matchUtilities = _a.matchUtilities, theme = _a.theme, e = _a.e;
    matchUtilities({
        'underline-shadow': function (colorValue, modifier) { return ({
            'box-shadow': "inset 0 -0.5em 0 0 ".concat(colorValue),
        }); },
    }, {
        type: ['color'],
        values: (0, flattenColorPalette_1.default)(theme('colors'))
    });
});
exports.underlineShadow = underlineShadow;
