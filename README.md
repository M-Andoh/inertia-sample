# inertia-sample
# インストール
```
$ sudo apt update
$ sudo apt install php-xml composer -y
$ composer create-project laravel/laravel inertia-sample
$ cd inertia-sample
$ echo "# inertia-sample" >> README.md
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin git@github.com:M-Andoh/inertia-sample.git
$ git push -u origin main
```


## sail インストール & 初期設定
```
$ php artisan sail:install  
(mysqlを選択：ご自由に）   
$ sail artisan key:generate
```

### config/app.php の変更
```
    'timezone' => 'UTC',
    ==>    
    'timezone' => env('APP_TIMEZONE', 'UTC'),
```

### .env の変更
```
APP_NAME=ToDo
APP_TIMEZONE=Asia/Tokyo
APP_LOCALE=ja
APP_FAKER_LOCALE=ja_JP

（以下は自由に）
DB_DATABASE
DB_USERNAME
DB_PASSWORD
```

```
$ sail up -d  
(mysqlを選択：ご自由に）   
$ sail artisan key:generate
```

### db準備
- database/migrations/0001_01_01_000000_create_users_table.php の変更   

以下を追加してみました。
```
$table->tinyInteger('role_id')->default(0);
```

- 動作確認
```
$ sail up -d
$ sail artisan migrate
```

- seeder作成
```
$ sail artisan make:seeder UserSeeder
```

- seeder更新
```
$ sail artisan make:seeder UserSeeder
```
```
$ sail artisan db:seed --class=UserSeeder
```

http://localhost に接続

## breeze インストール
### breeze 初期設定
```
$ sail npm install -D @types/node@^20.19.0
$ sail composer require laravel/breeze --dev
$ sail artisan breeze:install
   React with Inertia
   Dark mode
   TypeScript
   ESLint with Prettier
   PHPUnit
```
