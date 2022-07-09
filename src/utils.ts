const ONLY_SPACES_REG = /^\s*$/;
const BEGIN_SPACES_REG = /^\s*/;

export function dedent(content: string): string {
  const lines = content.split("\n").map((line) => line.replaceAll("\t", "  "));
  if (lines.length === 0) {
    return content;
  }
  if (lines[0].match(ONLY_SPACES_REG)) {
    lines.shift();
  }
  if (lines[lines.length - 1].match(ONLY_SPACES_REG)) {
    lines.pop();
  }
  const minIndent = lines.reduce(
    (min, line) => Math.min(min, line.match(BEGIN_SPACES_REG)![0].length),
    Infinity
  );
  if (minIndent === Infinity) {
    return content;
  }
  return lines.map((line) => line.substr(minIndent)).join("\n");
}

export function toArray<T>(val: T | Array<T>): Array<T> {
  if (Array.isArray(val)) {
    return val;
  }
  return [val];
}
