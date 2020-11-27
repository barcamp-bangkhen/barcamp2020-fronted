export enum BreakPoints {
  xs = 575,
  md = 991,
  lg = 1199,
}

export enum LowerBreakPoints {
  xs = 0,
  md = BreakPoints.xs + 1,
  lg = BreakPoints.md + 1,
}

export type ScreenName = 'xs' | 'md' | 'lg'
