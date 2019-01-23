//получаем абсолютный путь
let path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

//настройка в webpack
let conf = {
    //указываем webpack откуда брать начальный скрипт
    entry: './src/index.js',
    //выходные данные
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist'//localhost:8080 будет работать даже без папки dist + работает как liveReload
    },
    devServer: {
        //показывает ошибку в модальном окне (если вы ее допустили)
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
                // exclude: '/node_modules/'
            },
            {
                //для вывода css в отдельный файл
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    //для вывода css в отдельный файл
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ]
    // devtool: 'eval-sourcemap'

};

//экспортируем объект во внешний метод
module.exports = (env, options)=>{
    // console.log(options);
    let prod = options.mode==='production';
    conf.devtool = prod ? 'source-map' : 'eval-sourcemap';
    return conf;
};
