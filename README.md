# *Работа с Webpack*
## *Ход работы*
1. Выполним команду `npm init`. После этого создается файл package.json.
![image](https://user-images.githubusercontent.com/37180024/51604619-62e27900-1f1e-11e9-9b99-8ff9e5ef18fc.png "package.json")
2. Устанавливаем модуль Webpack: `npm i webpack --save-dev`
![image](https://user-images.githubusercontent.com/37180024/51605151-4a269300-1f1f-11e9-9385-e536169c90a4.png "Установка модуля Webpack")
3. Установим webpack-cli: `npm i webpack-cli --save-dev`
![image](https://user-images.githubusercontent.com/37180024/51605448-257eeb00-1f20-11e9-8671-c65a9e25a082.png "Установка webpack-cli")
4. Изменим скрипт на build в файле package.json:
```json
"scripts": {
    "build": "webpack"
  }
```
5. Создадим папку src в нашем проекте и в нем создадим index.js
6. Создадим файл index.html внутри проекта и файл some.js в папке src.
7. Подключим ` <script src="dist/main.js"></script>` в index.html. 
8. Добавим след. код в some.js:
```javascript
function sum(...numbers) {
    return numbers.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    })
}
function avg(...numbers) {
    return sum(...numbers)/numbers.length;
}

export default avg;
```
9. Импортируем функцию avg в index.js:
```javascript
import avg from './some';
console.log(avg(1,5475,32,5));
```
10. Запустим скрипт build: `npm run build`
![image](https://user-images.githubusercontent.com/37180024/51606787-e9e62000-1f23-11e9-8793-54da30b4d922.png "Запуск build")
11. После этого откроем index.html
![image](https://user-images.githubusercontent.com/37180024/51606909-43e6e580-1f24-11e9-99b6-6bbefd40a654.png "Работа с модулями")
12. Установим jQuery `npm i jquery --save`
![image](https://user-images.githubusercontent.com/37180024/51607021-94f6d980-1f24-11e9-836e-48ff414e59fe.png "Установка jQuery")
13. Импортируем jQuery и немного пработаем сним (в index.js), а также изменим файл index.html
```html
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1 class="title"></h1>
<script src="dist/main.js"></script>
</body>
</html>
```
```javascript
//index.js
import avg from './some';
import $ from 'jquery';
$('.title').html('Some text!');
console.log(avg(1,5475,32,5));
```
После чего запустим build и откроем страницу в браузере
![image](https://user-images.githubusercontent.com/37180024/51607404-97a5fe80-1f25-11e9-86bf-91a83353038e.png "Работа с jQuery")
14. Внесем изменения в build:
```json
"scripts": {
    "build": "webpack --mode production"
  }
```
15. Устнаовим webpack-dev-server. В нём встроен локальный сервер и livereload: 
`npm i webpack-dev-server --save-dev`
16. Добавим новый скрипт для работы с webpack-dev-sever в package.json:
```json
"scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --mode development --open"
  }
```
17. Запустим скрипт dev: `npm run dev`
![image](https://user-images.githubusercontent.com/37180024/51611371-29b30480-1f30-11e9-9484-47342cc10371.png "Запуск скрипта dev")
18. Создаем файл webpack.config.js в папке нашего проекта
19. Установим модуль path (для получения абсолютного пути): `npm i path --save-dev`
20. Добавляем следующий код в webpack.config:
```javascript
let path = require('path');
let conf = {
    //указываем относительный путь к точке входа
    entry: './src/index.js',
    //выходные значения
    output: {
        //указываем абсолютный путь к выходной папке
        path: path.resolve(__dirname,'./dist'),
        filename: 'main.js',
        //для webpack-dev-server(если мы удалим папку dist и запустим скрипт dev, все будет работать)
        publicPath: 'dist/'
    }
};

module.exports = conf;
```
Для проверки можно запустить build или dev:)

![image](https://user-images.githubusercontent.com/37180024/51613139-ed81a300-1f33-11e9-98a1-94c3739273d0.png "webpack-dev-server будет работать даже без папки dist + работает browserSync")

17. Добавим в webpack.config новую настройку после output, которая будет показывать ошибку на странице (если мы ее допустим):
```
javascript
devServer: {
    overlay: true
}
```
![image](https://user-images.githubusercontent.com/37180024/51615236-65ea6300-1f38-11e9-8018-fb644af10232.png)
18. Меняем код в some.js:
```javascript
function sum(...numbers) {
    return numbers.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    })
}
class SomeMath {
    avg(...numbers) {
        return sum(...numbers)/numbers.length;
    }
    max(...numbers){
        return Math.max(...numbers);
    }
    merge(a,b){
      return {
           ...a,
           ...b
      }
    }
}
export default new SomeMath;
```
и поменяем код в index.js:
```javascript
import some from './some';
import $ from 'jquery';
$('.title').html('Some text!');
console.log(some.avg(1,5475,32,5));
```
После этого запстим наш localhost:8080 в Chrome и Edge. В Edge возникает ошибка :frowning:
Будем исправлять:wink:

![image](https://user-images.githubusercontent.com/37180024/51616600-7e0fb180-1f3b-11e9-9b6a-1a2afe0c9dbb.png "Ошибка в консоли у Edge")
Для решения этой проблемы установим необходимые моодули babel: `npm i babel-core babel-loader babel-preset-env babel-preset-stage-3 --save-dev`
После этого создаем файл .babelrc в папке нашего проекта и добавляем следующий код:
```
{
  "presets": [
    "env",
    "stage-3"
  ]
}
```
Далее добавим в webpack.config добавим директиву module, в котором будет массив rules (описание правил для работы с файлами):
```javascript
module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
                // exclude: '/node_modules/'
            }
        ]
    }
```
![image](https://user-images.githubusercontent.com/37180024/51664800-510adf80-1fcb-11e9-913b-39fc7b99a3d0.png "Подключение rules")
Установим babel-loader 7 версии:`npm i babel-loader@7`
После этого запускаем build.
Вот и все, ошибка исправлена :wink:
![image](https://user-images.githubusercontent.com/37180024/51665341-9976cd00-1fcc-11e9-9dff-e1658e491ee9.png "Исправление в Edge успешно выполнено!")
19. Добавление source-map:
Для этого в webpack.config изменим module.exports:
```javascript
module.exports = (env, options)=>{
    // console.log(options);
    let prod = options.mode==='production';
    conf.devtool = prod ? 'source-map' : 'eval-sourcemap';
    return conf;
};
```
И запустим build
![image](https://user-images.githubusercontent.com/37180024/51666887-cbd5f980-1fcf-11e9-9ffd-7cbcd7e534f7.png "source-map создан")
20. Поработаем с css
Создадим в src папку css и добавим туда style.css
![image](https://user-images.githubusercontent.com/37180024/51668488-58ce8200-1fd3-11e9-8418-11d7f0a264da.png)
Далее установим css-loader : `npm i css-loader --save-dev`
После этого утсановим extract-text-webpack-plugin: `npm i extract-text-webpack-plugin@next --save-dev`
И подключим его в webpack.config:
Для начала подключим его в начале файла
```javascript
ExtractTextPlugin = require('extract-text-webpack-plugin');
```
Далее после module добавим следующий код:
```javascript
plugins: [
    new ExtractTextPlugin('styles.css'),
]
```
После этого в rules добавим еще одно правило:
```javascript
{
    //для вывода css в отдельный файл
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
    use: 'css-loader'
    })
}
```
Запускаем build и подключаем styles.css в dist
