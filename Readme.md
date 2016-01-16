# Typescript Seed


Include lots of goodness and give your a comfortable start on a frontend project.

- [Gulp](http://gulpjs.com/)
- [Webpack](https://webpack.github.io/)
- Documentaion generation
- Doc comments example.


**Useful** if you 

- want to write some [angular2](https://github.com/angular/angular) :yum:
- like  *modern and typed javascript*.
- headache :tired_face: for build process.
- decide to **document your code**  :closed_book: at the begin.

## Install


```shell
git clone https://github.com/BenBBear/typescript-seed  
cd ./typescript-seed
git clone -b gh-pages --single-branch  https://github.com/BenBBear/typescript-seed doc 
## Done
```

- Furthermore, you need to change **remote/origin** to your github repo address
- You may want to change the [doc/index.md](https://github.com/BenBBear/typescript-seed/blob/gh-pages/index.md)



## Compile

```shell
## For all the destination and filename, you could change them in gulpfile.js


## compile sass into one css file, and save it into public/app.css
## without minify if has debug option
gulp sass  [--debug]

## compile ts into one js file, and save it into public/app.js
## use webpack, so module/import is supported
## if debug option, app.js won't be minify and sourcemap will be inlined.
gulp ts  [--debug]

## above two as a whole
gulp build [--debug]
```



## Watch file changes and compile

```shell
## watch sass and build
gulp watch-sass

## watch ts and build
gulp watch-ts

## above as a whole
gulp watch
```


## Generate Doc

It use [Typedoc](http://typedoc.io/) and [Sassdoc2](http://sassdoc.com) to generate documenation websites.

```shell
## generate doc for sass, and output into doc/scss
gulp doc-sass

## generate doc for ts, and output into doc/ts
gulp doc-ts

## above two as a whole, plus create .nojekyll file
gulp doc
```


## Doc Comments example

In case you are not familar with doc commenting for sass/ts. 

- Typescript: [DocExample.ts](https://github.com/BenBBear/typescript-seed/blob/master/ts/classes/DocExample.ts)

- Sass: [doc-example.scss](https://github.com/BenBBear/typescript-seed/blob/master/scss/doc-example.scss)


## Create github pages for your documentation

```shell
gulp doc
cd ./doc
git push origin gh-pages 
```

Example: http://benbbear.github.io/typescript-seed/