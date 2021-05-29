# Review App by Rails + React

## Rails
```bash
$ rails new api --api -T
$ rails g model Airline name image_url slug
$ rails g model Review title description score:integer airline:belongs_to
$ rails db:create
$ rails db:migrate
```
### モデルに設定を追加
### シードの登録
### routes.rb 設定
### コントローラの作成
### アクションの定義
### 動作確認
### API完成
# TODO: テストコードの作成

## React
```bash
$ npx create-react-app front
```