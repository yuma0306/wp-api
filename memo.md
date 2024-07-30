## やること
- typesファイルの整理
- sassの導入（コンポーネントごとにファイルを作成する）
- テストコードを書いてみる
- 下記のLPをWPから静的に作成する
- OGPなどSEO周りのタグ修正

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
