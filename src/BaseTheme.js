export const colors = {
  primary: '#8D99AE',
  primaryDark: '#2B2D42',
  primaryLight: '#EDF2F4',
  accent: '#EF233C',
  accentDark: '#D90429',

  alpha: {
    primary: 'rgba(237, 242, 244, x)',
    primaryDark: 'rgba(43, 45, 66, x)',
    primaryLight: 'rgba(237, 242, 244, x)',
    accent: 'rgba(239, 35, 60, x)',
    accentDark: 'rgba(217, 4, 41, x)',
  },
}

export const shadows = {
  primary: `
    box-shadow: 0px 4px 8px rgba(62, 62, 62, 0.60);
  `,

  hover: {
    primary: `
      box-shadow: 0px 8px 12px rgba(62, 62, 62, 0.65);
    `,
  },
}

export default { colors, shadows }
