# webpack-with-advanced-configurations
Extract and minify styles according to the Media Queries, find unused modules from package.json


## How to use

### STEP 1

Download or Clone this Repository


### STEP 2

Copy and replace following files into your project root/folder<br />
  * /src 
  * /postcss.config.js 
  * /package.json 
  * /webpack.config.js  
  * /webpack.production.config.js 
  * /webpack.staging.config.js  

### STEP 3
- If you need you can import following libraries into your sass/less file<br />

  * ANIMATE CSS INCLUDES
  * AOS
  * Fancy box
  * Font awesome

### STEP 4

You can mention media queries in web-pack configuration files <br /> 
<br />
/webpack.config.js  - `Line 138--`<br />
/webpack.production.config.js  - `Line 131--`<br />
/webpack.staging.config.js  - `Line 132--`<br />
<br />
<br />
For Example : Now I'm Using <br />
```
queries: {
	'(min-width: 768px) and (max-width: 991.98px)': 'tablet',
	'(min-width: 768px)': 'tablet',
	'(min-width: 992px)': 'desktop',
	'(min-width: 992px) and (max-width: 1199.98px)': 'desktop',
	'(min-width: 1200px)': 'desktop'
}
```
<br />
<br />
Depend on the above noted queries, your style will separate in to different files<br />
According to the above noted queries, you will get the following files.<br />
<br />
`style-desktop.css` can use for view-port above 992px<br />
`style-tablet.css` can use for view-port above 768px<br />
`style.css` rest of the styles will load here<br />
<br />
<br />
According to the view-port you can load in to your page<br />
```
HTML
<link rel="stylesheet" type="text/css" href="dist/style.css" />
<link rel="stylesheet" type="text/css" media="min-width: 768px" href="dist/style-tablet.css" />
<link rel="stylesheet" type="text/css" media="min-width: 992px" href="dist/style-desktop.css" />
```
<br />
<br />
If you Use Bootstrap<br />
i) style-desktop.css - It's loading only above 992px (Desktop)<br />
   you can use following Media Queries and Bootstrap mixins to load styles within this stylesheet<br />
 `(min-width: 992px)` <br />
 `@include media-breakpoint-up(lg)` <br />
 `(min-width: 992px) and (max-width: 1199.98px)` <br />
 `(min-width: 1200px)` <br />
 `@include media-breakpoint-up(xl)` <br />
 `@include media-breakpoint-only(lg)` <br />
 `@include media-breakpoint-only(xl)` <br />
 <br />      
ii) style-tablet.css  - It's loading only above 768px (iPhone landscape , Ipad)<br />
    you can use following Media Queries and Bootstrap mixins to load styles within this stylesheet<br />
 `@media (min-width: 768px) and (max-width: 991.98px)` <br />
 `@include media-breakpoint-only(md)` <br />
 `@media (min-width: 768px)`<br />
 `@include media-breakpoint-up(md)` <br />
 <br />  
iii) style.css - Common Styles + Mobile viewport related styles<br />
   
## USAGE COMMANDS

#### npm run dev
  Minimize JS and CSS files: Disabled<br />
  Mode: development<br />
  Watch : true<br />
  Extract styles according to the media queries.<br />
  
#### npm run staging 
  Minimize JS and CSS files: Enabled<br />
  Mode: development<br />
  Watch : true<br />
  Extract styles according to the media queries.<br />
  
#### npm run build
  Minimize JS and CSS files: Enabled<br />
  Mode: production<br />
  Watch : false<br />
  Extract styles according to the media queries.<br />
  
#### depcheck
   End of the Project or Sprint you can bale to check unused modules from package.json<br />
   
#### npm-check <path> <options>

	Path <br />
	  Where to check. Defaults to current directory. Use -g for checking global modules.<br />
<br />
	Options<br />
	  `-u, --update`     Interactive update. <br />
	  `-y, --update-all`     Uninteractive update. Apply all updates without prompting.<br />
	  `-g, --global`     Look at global modules.<br />
	  `-s, --skip-unused`     Skip check for unused packages.<br />
	  `-p, --production`     Skip devDependencies.<br />
	  `-d, --dev-only`     Look at devDependencies only (skip dependencies).<br />
	  `-i, --ignore`     Ignore dependencies based on succeeding glob.<br />
	  `-E, --save-exact`     Save exact version (x.y.z) instead of caret (^x.y.z) in package.json.<br />
	  `--specials`     List of depcheck specials to include in check for unused dependencies.<br />
	  `--no-color`   Force or disable color output.<br />
	  `--no-emoji`     Remove emoji support. No emoji in default in CI environments.<br />
	  `--debug`    Show debug output. Throw in a gist when creating issues on github.<br />
<br />
	Examples <br />
	  `$ npm-check`    # See what can be updated, what isn't being used.<br />
	  `$ npm-check ../foo`    # Check another path.<br />
	  `$ npm-check -gu`     # Update globally installed modules by picking which ones to upgrade.<br />