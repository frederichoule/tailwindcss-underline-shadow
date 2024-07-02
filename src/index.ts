import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin";

const underlineShadow = plugin(({ matchUtilities, theme }) => {

    matchUtilities(
        {
            'underline-shadow': (colorValue) => ({
                'box-shadow': `inset 0 -0.5em 0 0 ${colorValue}`,
            }),
        },
        {
            type: ['color'],
            values: flattenColorPalette(theme('colors'))
        }
    );

});

export default underlineShadow;
