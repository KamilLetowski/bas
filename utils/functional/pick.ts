export function pick<T>(key: keyof T) {
  return (input: T) => {
    return input !== null && input !== undefined ? input[key] : undefined;
  };
}
