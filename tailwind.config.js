const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    theme: {
        fontFamily: {
            sans: ['"Encode Sans"', ...defaultTheme.fontFamily.sans],
            serif: ['"EB Garamond"', ...defaultTheme.fontFamily.serif],
            CursiveFont: '"CursiveFont"',
        },
        fontSize: {
            sm: ['0.8rem'],
            base: ['16px', '24px'],
            lg: ['1.25rem'],
            xl: ['1.5625rem'],
            '2xl': ['2rem'],
            '3xl': ['2.4415rem'],
            '5xl': ['3rem'],
            '6xl': ['5rem'],
        },
        extend: {
            screens: {
                desktop: '1250px',
                large: '1450px',
                // Max container width = 1520 + 7em margin eachside (7*20px = 140px, 280 px total) = 1800
                largest: '1800px',
            },
            colors: {
                projectPurple: '#9448bc',
                projectPurpleLighter: '#ae54de',
                projectGreen: '#3ddd78',
                projectWhite: '#f5f5fa',
                projectBlack: '#343434',
                projectRed: '#cc2936',
            },
        },
    },
    plugins: [],
};
