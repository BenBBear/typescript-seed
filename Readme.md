# Typescript Seed


Include lots of goodness:

- gulp/webpack compile files into bundle
- doc generation for sass/ts
- sassdoc/typescript doc comments example.


useful if you 

- want to write some angular2.
- like to write modern and typed javascript.
- hate the setup process for a web frontend project.
- decide to document your code at the begin.

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

## compile sass into one css file, and save it into public/app.css
## with minify
gulp sass  


## compile ts into one js file, and save it into public/app.js
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


```shell

## generate doc for sass, and output into doc/scss
gulp doc-sass

## generate doc for ts, and output into doc/ts
gulp doc-ts

## above two as a whole, plus create .nojekyll file
gulp doc
```


## Doc example

In case you are not familar with doc commenting for sass/ts. 

- Typescript: [DocExample.ts](https://github.com/BenBBear/typescript-seed/blob/master/ts/classes/DocExample.ts)

- Sass: [doc-example.scss](https://github.com/BenBBear/typescript-seed/blob/master/scss/doc-example.scss)


## Create github pages for your documentation

```shell
cd ./doc
git push origin gh-pages 
```