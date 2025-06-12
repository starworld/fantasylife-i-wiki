/// <reference types="astro/client" />

// 画像インポートの型定義
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.webp'
declare module '*.svg'

// YAMLファイルの型定義
declare module '*.yaml' {
  const value: any;
  export default value;
}
declare module '*.yml' {
  const value: any;
  export default value;
}

// 環境変数の型定義
interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string
  readonly PUBLIC_GA_MEASUREMENT_ID?: string
  readonly PUBLIC_ADSENSE_CLIENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}