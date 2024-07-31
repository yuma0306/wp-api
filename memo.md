## やること
- FAQ作成
- OGPなどSEO周りのタグ修正
- typesファイルの整理

- テストコードを書いてみる
- 下記のLPをWPから静的に作成する
- index.htmlではそのテンプレートの一覧を表示
- 大元のindex.htmlではすべてのテンプレートのリストを表示

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
