export default {
    content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
    theme: {
        extend: {
            colors: {
                primario: {
                    '50':  '#fdfcfa',
                    '100': '#fbf0e8',
                    '200': '#f7d0d0',
                    '300': '#eda4a6',
                    '400': '#e9747a',
                    '500': '#db5158',
                    '600': '#c3373c',
                    '700': '#9c292d',
                    '800': '#701d1e',
                    '900': '#451211',
                },
                secundario: {
                    '50':  '#fcfbfa',
                    '100': '#f9f2eb',
                    '200': '#f3d8d3',
                    '300': '#e2aea9',
                    '400': '#d4807a',
                    '500': '#bd5c55',
                    '600': '#9f413a',
                    '700': '#79302b',
                    '800': '#52211e',
                    '900': '#311411',
                },
                terciario: {
                    '50':  '#f9faf9',
                    '100': '#f0f1f1',
                    '200': '#dddfe1',
                    '300': '#b7bcbe',
                    '400': '#889493',
                    '500': '#6a726d',
                    '600': '#545750',
                    '700': '#40413c',
                    '800': '#2c2b2a',
                    '900': '#1a1a1b',
                },
            },
        },
        screens:{
            'xs':'425px',
                // => @media (min-width: 425px) { ... }
            'sm': '640px',
                // => @media (min-width: 640px) { ... }

            'md': '768px',
                // => @media (min-width: 768px) { ... }

            'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
        },
        },
        variants: {
            extend: {},
        },
        plugins: [],
}