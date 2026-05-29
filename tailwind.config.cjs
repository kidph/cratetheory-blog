/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:      '#080810',
        surface: '#0F0F1A',
        border:  '#1E1E2E',
        cream:   '#F2EAD8',
        muted:   '#8A8070',
        dim:     '#3A3828',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: (theme) => ({
        ct: {
          css: {
            '--tw-prose-body':        theme('colors.cream'),
            '--tw-prose-headings':    theme('colors.cream'),
            '--tw-prose-links':       theme('colors.cream'),
            '--tw-prose-bold':        theme('colors.cream'),
            '--tw-prose-counters':    theme('colors.muted'),
            '--tw-prose-bullets':     theme('colors.muted'),
            '--tw-prose-hr':          theme('colors.border'),
            '--tw-prose-quotes':      theme('colors.muted'),
            '--tw-prose-captions':    theme('colors.muted'),
            '--tw-prose-code':        theme('colors.cream'),
            '--tw-prose-pre-code':    theme('colors.cream'),
            '--tw-prose-pre-bg':      theme('colors.surface'),
            '--tw-prose-th-borders':  theme('colors.border'),
            '--tw-prose-td-borders':  theme('colors.border'),
            'a': { textDecorationColor: theme('colors.dim') },
            'a:hover': { textDecorationColor: theme('colors.cream') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
