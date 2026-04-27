# 松島医院サイト（Vercel公開用）

このリポジトリは、松島医院の静的サイトです。

## 構成
- `index.html`（トップ）
- `shinryo.html`（診察案内）
- `doctor.html`（医師紹介）
- `access.html`（アクセス）
- `news.html`（お知らせ）
- `styles.css`（共通スタイル）
- `vercel.json`（Vercel ルーティング設定）

## Vercelで公開する方法

### 1) GitHubにpush
このリポジトリをGitHubへpushします。

### 2) Vercelに連携
1. Vercelにログイン
2. **Add New → Project**
3. 対象のGitHubリポジトリを選択
4. Framework Preset: **Other**
5. Build Command: **空欄**
6. Output Directory: **空欄**
7. Deploy

これで公開URLが発行されます。

## URL
`vercel.json` により、以下のURLでアクセスできます。
- `/`（トップ）
- `/shinryo`
- `/doctor`
- `/access`
- `/news`

