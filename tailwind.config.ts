import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F6F6F6',
        muted: '#EBEDF0',
        border: '#767680',
        foreground: '#000000',
        'accent-foreground': '#007AFF',
        'muted-foreground': '#1B1F26',
      },
    },
  },
  plugins: [],
} satisfies Config;
