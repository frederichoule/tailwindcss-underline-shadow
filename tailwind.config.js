import underlineShadow from './dist';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        {
            raw: '<div class="underline-shadow-blue-500/50">Hello, world!</div>',
            extension: 'html'
        }
    ],
    plugins: [
        underlineShadow
    ]
};
