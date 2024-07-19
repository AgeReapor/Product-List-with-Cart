export default function imageImport(imageUrl: string) {
  return new URL(imageUrl, import.meta.url).href;
}
