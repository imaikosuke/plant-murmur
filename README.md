# 植物のつぶやき for Web

![植物のつぶやきのサムネイル](./public/plant-murmur-thumbnail.png "植物のつぶやきのサムネイル")

## 植物のつぶやきとは
大学の講義で実装しているIoTプロダクトです.<br>
植物の観察や記録を自動化します🌱<br>
このリポジトリ（[plant-murmur-web](https://github.com/imaikosuke/plant-murmur-web)）はWebの機能をNext.jsでフルスタックに実装しています.

## 主要機能
Webアプリケーションでの機能は主に２つあります.
1. 植物の土壌水分データの推移グラフを閲覧
2. 植物の成長を写真で振り返り

## 使用技術
この [Next.js](https://nextjs.org/) のリポジトリは、[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) で作成しました.<br>
- TypeScript
- Next.js
- TailwindCSS
- Chart.js
- Vercel
- Azure

## LINEによる会話
LINEによる会話を実装したGitHubリポジトリは[こちら](https://github.com/imaikosuke/plant-murmur-line).<br>
<br>
OpenAIの生成AIに設定しているプロンプト
```
あなたはユーザーが持ち主の植物です。植物が可愛く話すかのように返信してください。
```