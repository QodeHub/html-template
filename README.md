# Boilerplate

Template Boilerplate for building UI designs with Pug and Sass.

## Requirements

Make sure [Node JS](https://nodejs.org), [NPM](https://www.npmjs.com) and [Gulp](http://gulpjs.com/) are already installed on your computer.

## Install

* Clone and `cd` into the project directory
* Execute `npm install` to download dependencies

## Run

* Execute `npm start` or `gulp serve`.

## Build

* Execute `gulp build`.

## Watch and Build

* Execute `gulp serve` to watch for changes and build whenever files are modified

## Folders

```
+ dist
  + css : This folder contains prebuild files, app.css (main styles) and page-specific styles
  + fonts : Put your font files here, also do not forget to import it in _variables.scss.
  + icons : Put your icon files here.
  + images : Put your image files here.
  + js : This folder contains prebuild scripts, and page-specific scripts.
+ src
  + js
    - app.js : Put your js code here.
  + html
    + components
      - mixin.pug : Mixin pug file. Includes all component mixins 
    + layouts
      - index.pug : Index pug file. Defines the layout
      - base.pug : Base pug file. Contains links to external stylesheets, scripts, SEO metas.
    + pages
      - index.pug : Index page pug file.
    + partials
      - footer.pug : Footer pug file.
  + scss
    + base       : Contains resets and sensible defaults for basic html elements.
    + components : Stand-alone reusable components with their modifiers and variations.
    + helpers    : Stand-alone helper classes for small layout issues.
    + settings   : Settings for colors, breakpoints, typography, etc.
    + vendor     : Imported and customized CSS from 3rd party components like fancybox, select2 etc.
    - app.scss : Import all scss files. (main file)
```

## Gulp Plugins

* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) : Minify your JS.
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) : Compile your Sass into CSS.
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) : Combines and rename files.
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) : Gulp plugin for compiling Pug templates, compile Pug into HTML.
* [live-server](https://www.npmjs.com/package/live-server) : Development server with live reload capability.