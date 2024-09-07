import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  // safelist: [
  //   {
  //     pattern: /bg-(black|white|gray|red|yellow|green|blue|indigo|purple|pink)-(100|200|300|400|500|600|700|800|900)/,
  //     variants: ['hover', 'focus', 'active', 'disabled', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /text-(black|white|gray|red|yellow|green|blue|indigo|purple|pink)-(100|200|300|400|500|600|700|800|900)/,
  //     variants: ['hover', 'focus', 'active', 'disabled', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /border-(black|white|gray|red|yellow|green|blue|indigo|purple|pink)-(100|200|300|400|500|600|700|800|900)/,
  //     variants: ['hover', 'focus', 'active', 'disabled', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /border(-[trblxy])?(-0|(-[0-9]+))?$/,
  //     variants: ['hover', 'focus', 'active', 'group-hover', 'sm', 'md', 'lg', 'xl', '2xl'],
  //   },
  //   // Border Color
  //   {
  //     pattern: /border-(.+)$/,
  //     variants: ['hover', 'focus', 'active', 'group-hover', 'sm', 'md', 'lg', 'xl', '2xl'],
  //   },
  //   // Border Opacity
  //   {
  //     pattern: /border-opacity-[0-9]+$/,
  //     variants: ['hover', 'focus', 'active', 'group-hover', 'sm', 'md', 'lg', 'xl', '2xl'],
  //   },
  //   // Border Style
  //   {
  //     pattern: /border-(solid|dashed|dotted|double|hidden|none)$/,
  //     variants: ['hover', 'focus', 'active', 'group-hover', 'sm', 'md', 'lg', 'xl', '2xl'],
  //   },
  //   // Border Radius
  //   {
  //     pattern: /rounded(-[trblxy])?(-none|-sm|-md|-lg|-xl|-2xl|-3xl|-full)?$/,
  //     variants: ['hover', 'focus', 'active', 'group-hover', 'sm', 'md', 'lg', 'xl', '2xl'],
  //   },
  //   // Divide Width
  //   {
  //     pattern: /divide-([xy])-[0-9]+$/,
  //     variants: ['hover', 'focus', 'active', 'group-hover', 'sm', 'md', 'lg', 'xl', '2xl'],
  //   },
  //   // Divide Color
  //   {
  //     pattern: /divide-(.+)$/,
  //     variants: ['hover', 'focus', 'active', 'group-hover', 'sm', 'md', 'lg', 'xl', '2xl'],
  //   },
  //   // Divide Opacity
  //   {
  //     pattern: /divide-opacity-[0-9]+$/,
  //     variants: ['hover', 'focus', 'active', 'group-hover', 'sm', 'md', 'lg', 'xl', '2xl'],
  //   },
  //   // Divide Style
  //   {
  //     pattern: /divide-(solid|dashed|dotted|double|none)$/,
  //     variants: ['hover', 'focus', 'active', 'group-hover', 'sm', 'md', 'lg', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /shadow-(black|white|gray|red|yellow|green|blue|indigo|purple|pink)-(100|200|300|400|500|600|700|800|900)/,
  //     variants: ['hover', 'focus', 'active', 'disabled', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /shadow-(sm|md|lg|xl|2xl|inner|none)/,
  //     variants: ['hover', 'focus', 'active', 'group-hover', 'sm', 'md', 'lg', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /(p|m|w|h)-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
  //     variants: ['hover', 'focus', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /w-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|full|screen|auto)/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /h-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|full|screen|auto)/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /(m|p)(t|r|b|l|x|y)?-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
  //     variants: ['sm', 'md', 'lg', 'xl', '2xl', 'hover', 'focus'],
  //   },
  //   {
  //     pattern: /flex-(row|row-reverse|col|col-reverse|wrap|wrap-reverse|nowrap|1|auto|initial|none)/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /justify-(start|end|center|between|around|evenly)/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /items-(start|end|center|baseline|stretch)/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /content-(start|end|center|between|around|evenly)/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /self-(auto|start|end|center|stretch)/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /order-(first|last|none|[1-12])/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },

  //   // Grid utilities
  //   {
  //     pattern: /grid-(cols|rows)-[1-12]/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /gap-(0|1|2|3|4|5|6|7|8|9|10|11|12)/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /col-span-[1-12]/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /row-span-[1-12]/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /auto-(cols|rows|flow)/,
  //     variants: ['hover', 'focus', 'responsive', 'lg', 'md', 'sm', 'xl', '2xl'],
  //   },
  //   {
  //     pattern: /(rounded|shadow|opacity|transition|transform|cursor)-/,
  //     variants: ['hover', 'focus', 'active', 'group-hover'],
  //   },
  // ],
};
export default config;
