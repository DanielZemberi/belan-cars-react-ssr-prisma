const BREAK_POINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
} as const;

export const responsiveBreakPoints = {
  xs: { query: `(max-width: 575.99px)` },
  sm: { query: `(min-width: ${BREAK_POINTS.sm}px)` },
  md: { query: `(min-width: ${BREAK_POINTS.md}px)` },
  lg: { query: `(min-width: ${BREAK_POINTS.lg}px)` },
  xl: { query: `(min-width: ${BREAK_POINTS.xl}px)` }
} as const;

export default BREAK_POINTS;
