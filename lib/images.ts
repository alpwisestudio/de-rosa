// Dimensioni delle foto (versione 1280), generate da public/img. Ogni foto ha anche la versione -640.
export const dims: Record<string, [number, number]> = {
  "aula": [1280, 720],
  "bus": [853, 1280],
  "camion-pale": [960, 1280],
  "casco": [853, 1280],
  "guida-sera": [1280, 853],
  "istruttore": [1280, 853],
  "moto": [1280, 853],
  "strada-albero": [1280, 853],
  "volante-chiaro": [1280, 853],
};

export function pic(name: string, sizes: string) {
  const [w, h] = dims[name];
  const w640 = Math.round((640 / Math.max(w, h)) * w);
  return {
    src: `/img/${name}-1280.jpg`,
    srcSet: `/img/${name}-640.jpg ${w640}w, /img/${name}-1280.jpg ${w}w`,
    sizes,
    width: w,
    height: h,
  };
}
