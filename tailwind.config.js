module.exports = {
    content: ['./src/**/*.vue'],
    theme: {
        screens: {
            sm: { max: '640px' }
            // => @media (max-width: 640px) { ... }
        },
        extend: {
            fontFamily: {
                sans: ['Gotham Pro']
            },
            colors: {
                black: {
                    100: '#F4F5F9',
                    200: '#E9EAED',
                    300: '#E0E1E4',
                    400: '#C9CDCA',
                    500: '#AFAFB0',
                    600: '#8D8E90',
                    700: '#707072',
                    800: '#1c1c1c',
                    900: '#191919'
                },
                blueish: '#5181B8'
            }
        },
        container: {
            center: true,
            padding: '1rem'
        }
    },
    plugins: [require('@tailwindcss/forms')]
}
