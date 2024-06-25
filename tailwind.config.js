/** @type {import('tailwindcss').Config} */
console.log(process.env);
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    spacing: {
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      36: '36px',
      40: '40px',
      44: '44px',
      48: '48px',
      52: '52px',
      56: '56px',
      60: '60px',
    },
    fontSize: {
      xs: '20px',
      sm: '22px',
      base: '24px',
      lg: '26px',
      xl: '28px',
      '2xl': '30px',
      '3xl': '34px',
      '4xl': '38px',
      '5xl': '42px',
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    leading: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    fontFamily: {
      sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Menlo', 'Monaco', 'monospace'],
    },
    borderRadius: {
      none: '0',
      sm: '2px',
      DEFAULT: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      '2xl': '16px',
      '3xl': '24px',
      full: '9999px',
    },
    colors: {
      red: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
      },
      volcano: {
        50: '#FFF2E8',
        100: '#FFE0C7',
        200: '#FFC69E',
        300: '#FFA578',
        400: '#FF7A4D',
        500: '#FA541C',
        600: '#D4380D',
        700: '#AD2102',
        800: '#871400',
        900: '#610B00',
      },
      orange: {
        50: '#FFF7E6',
        100: '#FFE7BA',
        200: '#FFD591',
        300: '#FFC069',
        400: '#FFA940',
        500: '#FA8C16',
        600: '#D46B08',
        700: '#AD4E00',
        800: '#873800',
        900: '#612500',
      },
      gold: {
        50: '#FFFAF0',
        100: '#FEECB3',
        200: '#FFD666',
        300: '#FFC53D',
        400: '#FFB800',
        500: '#FFA940',
        600: '#D46B08',
        700: '#AD4E00',
        800: '#873800',
        900: '#612500',
      },
      yellow: {
        50: '#FFFAE6',
        100: '#FFF566',
        200: '#FFEC3D',
        300: '#FFD700',
        400: '#FFC400',
        500: '#FAAD14',
        600: '#D4B106',
        700: '#AD8B00',
        800: '#876800',
        900: '#614700',
      },
      lime: {
        50: '#FCFFE8',
        100: '#F4FF81',
        200: '#EAFF2D',
        300: '#D4FF00',
        400: '#BFFF00',
        500: '#A3E635',
        600: '#7ECB05',
        700: '#5AA802',
        800: '#3D7D02',
        900: '#235902',
      },
      green: {
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D',
      },
      cyan: {
        50: '#ECFEFF',
        100: '#CFFAFE',
        200: '#A5F3FC',
        300: '#67E8F9',
        400: '#22D3EE',
        500: '#06B6D4',
        600: '#0891B2',
        700: '#0E7490',
        800: '#155E75',
        900: '#164E63',
      },
      blue: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
      },
      geekblue: {
        50: '#F0F5FF',
        100: '#D6E4FF',
        200: '#ADC6FF',
        300: '#84A9FF',
        400: '#597EF7',
        500: '#2F54EB',
        600: '#1D3DBF',
        700: '#132D8D',
        800: '#101D6A',
        900: '#19134A',
      },
      purple: {
        50: '#F5F3FF',
        100: '#EDE9FE',
        200: '#DDD6FE',
        300: '#C4B5FD',
        400: '#A78BFA',
        500: '#8B5CF6',
        600: '#7C3AED',
        700: '#6D28D9',
        800: '#5B21B6',
        900: '#4C1D95',
      },
      magenta: {
        50: '#FFF0F6',
        100: '#FFD6E8',
        200: '#FFB3D1',
        300: '#FF8AB8',
        400: '#F364A2',
        500: '#E8368F',
        600: '#DA127D',
        700: '#BC0A6F',
        800: '#A30664',
        900: '#870557',
      },
      gray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#f0f0f0',
        300: '#d9d9d9',
        400: '#bfbfbf',
        500: '#8c8c8c',
        600: '#595959',
        700: '#434343',
        800: '#262626',
        900: '#1f1f1f',
        950: '#141414',
      },
      primary: '#3B82F6',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
    },
  },
  plugins: [],
  corePlugins: {
    // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发小程序和 h5 端，你应该使用环境变量来控制它
    preflight: true,
  },
};