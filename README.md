# ポートフォリオアプリ（開発中）

## 概要

自分の制作したアプリや技術スタック、開発のこだわりなどを  
わかりやすく解説・紹介するためのポートフォリオサイトです。

## 制作の目的

- 自分の技術力や開発経験を整理してアピールしたい
- チームメンバーとのコミュニケーションに役立てたい
- コードや技術解説を通じて自分の成長を可視化したい

## 主な技術スタック

- TypeScript
- Node.js（Firebase Functions）
- React（開発後期）
- Firebase Firestore
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
│   │   └── supabase.ts   # Supabaseクライアント設定
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── routes/
│   │   └── router.tsx    # react-router-dom の設定
│   ├── App.tsx
|   ├── index.css
│   └── main.tsx
├── .env.local            # Supabase URLとKeyを設定
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 現在の開発状況

## 使い方・デプロイ方法

...

## ライセンス

...
