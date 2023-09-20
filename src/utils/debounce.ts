export const debounce = (callee: (...args: unknown[]) => void, timeoutMs: number) => {
  return function perform(...args: unknown[]) {
    const previousCall = this.lastCall;

    this.lastCall = Date.now();

    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }

    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
};
