#add-text-loader

## About
add text in load file
在读取的文件前加一行字符串，可以忽略一些文件

## Config
你可以在你的webpack里配置add-text-loader，并且可以忽略一些文件

You can config the loader's behavior by adding an field in your webpack config and ignore some file:

``` js
var webpack = require('webpack')
module: {
    loaders: [
                {
                test: /\.less$/,
                loader: ['css-loader!less-loader!add-text-loader?add= @import "../styles/index";&ignore="packages/styles"']
            },
    ]
}
```

## Getting Started


## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)


## License

MIT (http://www.opensource.org/licenses/mit-license.php)
