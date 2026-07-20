/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />

declare module '*&imagetools' {
  const src: string
  export default src
}

declare module '*?w=*' {
  const src: string
  export default src
}

declare module '*.jpg?*' {
  const src: string
  export default src
}

declare module '*.png?*' {
  const src: string
  export default src
}

declare module '*.jpeg?*' {
  const src: string
  export default src
}

declare module '*.webp?*' {
  const src: string
  export default src
}
