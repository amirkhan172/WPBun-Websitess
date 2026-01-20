import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                inter: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: '#1f66ff',
                    dark: '#1a56d6',
                },
                secondary: '#070707',
                accent: {
                    DEFAULT: '#cdf33b',
                    dark: '#b8de30',
                },
                'bg-light': '#f5f7f9',
                'text-dark': '#070707',
                'text-gray': '#6b7280',
                'text-light': '#9ca3af',
            },
        },
    },

    plugins: [forms, typography],
};
