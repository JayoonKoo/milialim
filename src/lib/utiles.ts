export function isEmpty(
  value: string | number | readonly string[] | undefined
) {
  switch (typeof value) {
    case "undefined":
      return true;
    case "string":
      return value.length === 0;
    case "number":
      return false;
    default:
      return true;
  }
}
