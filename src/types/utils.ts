export type ValueOf<T> = T[keyof T];

export type RequireAtLeastOne<T, R extends keyof T = keyof T> = Omit<T, R> &
  { [P in R]: Required<Pick<T, P>> & Partial<Omit<T, P>> }[R];
