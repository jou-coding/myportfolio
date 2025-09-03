# ポートフォリオアプリ

## 概要

自分の制作したアプリや技術スタック、開発のこだわりなどを  
わかりやすく解説・紹介するためのポートフォリオサイトです。

## 制作の目的

- 自分の技術力や開発経験を整理してアピールしたい
- チームメンバーとのコミュニケーションに役立てたい
- コードや技術解説を通じて自分の成長を可視化したい

## 主な技術スタック

- TypeScript
- React
- Supabase
- Vercel（デプロイ）

## ディレクトリ構成

```
my-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/           # 画像・SVGなど
│   ├── components/       # 共通UI部品（Header, Footerなど）
│   ├── features/         # 各機能ごとにディレクトリを分ける
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectList.tsx
│   │   │   └── projectTypes.ts
│   │   └── contact/
│   │       ├── ContactForm.tsx
│   │       └── contactTypes.ts
│   ├── lib/
│   │   └── supabaseClient.ts   # Supabaseクライアント設定
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   
│   ├── App.tsx
|   ├── index.css
│   └── main.tsx
├── .env.local            # Supabase URLとKeyを設定
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
