export default function resolveProductionUrl(document) {
  return `https://adaptia-web.netlify.app/${document.slug.current}`
}
