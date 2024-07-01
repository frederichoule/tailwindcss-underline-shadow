import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin";

const underlineShadow = plugin(({ matchUtilities, theme, e }) => {

    matchUtilities(
        {
            'underline-shadow': (colorValue, modifier) => ({
                'box-shadow': `inset 0 -0.5em 0 0 ${colorValue}`,
            }),
        },
        {
            type: ['color'],
            values: flattenColorPalette(theme('colors'))
        }
    );

});

export { underlineShadow };
