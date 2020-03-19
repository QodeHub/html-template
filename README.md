# Boilerplate

Template Boilerplate for building UI designs with Pug and Sass.

## Requirements

Make sure [Node JS](https://nodejs.org), [NPM](https://www.npmjs.com) and [Gulp](http://gulpjs.com/) are already installed on your computer.

## Install

* Clone `git clone https://github.com/kdgyimah/boilerplate.git` and `cd` into the project directory
* Execute `npm install` to download dependencies

## Run

* Execute `npm start` or `gulp`.

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
    + breakpoints
      ### You can add and edit breakpoints styles for your application here
      - sm.scss : Specific styles for SM-BREAKPOINT (0px - 768px)
      - md.scss : Specific styles for MD-BREAKPOINT (768px)
      - lg.scss : Specific styles for LG-BREAKPOINT (992px)
      - xl.scss : Specific styles for XL-BREAKPOINT (1140px)
    + components
      ### You can add and edit components styles for your application here
      + buttons
        - _buttons.scss : Import all Button styles here
      + cards
        - _cards.scss : Import all Card styles here
      + dropdowns
        - _dropdowns.scss : Import all Dropdown styles here
      + forms
        - _forms.scss : Import all Form styles here
      + modals
        - _modals.scss : Import all Modal styles here
    + layouts
      - _footer.scss : Footer styles go here.
      - _header.scss : Header styles here.
    + pages
      ###  Specific page styles
      - home.scss : Example scss for home page.
      - about.scss : Example scss for about page.
    + global
      ### Global styles
      - _mixins.scss : Mixins here (reusable styles)
      - _navigation.scss : Navigation styles
      - resets.scss : Resets
      - utils.scss : Utiities
      - _variables.scss : Style variables
      - index.scss : Global styles here, such us html, body, section, headings, anchor etc.
    + pages
      - home.scss : Example scss for home page.
    - app.scss : Import all scss files.
```

## Gulp Plugins

* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) : Minify your JS.
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) : Compile your Sass into CSS.
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) : Combines and rename files.
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) : Gulp plugin for compiling Pug templates, compile Pug into HTML.