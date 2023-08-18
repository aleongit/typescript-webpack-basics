export function getImgWithLink(path: string): HTMLAnchorElement {
  const imatge = new Image();
  const a = document.createElement('a');
  imatge.src = path;
  a.appendChild(imatge);
  a.setAttribute('href', imatge.src);
  return a;
}
