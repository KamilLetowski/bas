export function pipe(...fns: any[]) {
  return (x?: any) => {
    return fns.reduce((y, fn) => {
      return fn(y);
    }, x);
  };
}
