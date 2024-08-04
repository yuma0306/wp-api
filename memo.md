## やること
- Googlefontを読み込み
- スマホスタイル作成
- 余白を変数化・変数整理
- フォントサイズを調整
- componentのstory bookを作成
- index.htmlではそのテンプレートの一覧を表示
- 大元のindex.htmlではすべてのテンプレートのリストを表示

- vercelにoutディレクトリをデプロイ
- テストコードを書いてみる

## LP
- WEB開発ツール紹介
- 下記をすべて同じテンプレートで作る

### Cursorを勧めるLP
- https://www.cursor.com/

### MAMPPROを勧めるLP
- https://www.mamp.info/en/mac/

### ACFを勧めるLP（できたら）
- https://www.advancedcustomfields.com/pro/

## デプロイ
1. wordpressでローカル環境立ち上げ
1. `cd next` & `node img.js`でWPのREST APIから画像をpublic/imgにダウンロード
1. `npm run build`でビルド
1. LP完成

useRouterはクライアントサイドでのみ動作するため、SSG（静的サイト生成）では使用できません。
