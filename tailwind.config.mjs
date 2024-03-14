import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Onest Variable', ...defaultTheme.fontFamily.sans],
      },
			colors: {
				'primary': 'var(--color-primary)',
				'secondary': 'var(--color-secondary)',
				'bg-primary': 'var(--bg-color-primary)',
				'bg-secondary': 'var(--bg-color-secondary)',
				'text-accent': 'var(--accent)',
				'text-neutral': 'var(--color-neutral)'
			}
		},
	},
	plugins: [],
}
