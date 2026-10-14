/** Prefix local URLs with the deployment path, including on GitHub Pages. */
export function sitePath(path = "") {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
