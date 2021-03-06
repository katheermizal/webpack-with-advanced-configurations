# webpack-with-advanced-configurations
Extract and minify styles according to the Media Queries, find unused modules from package.json


## HOW TO USE

### STEP 1

Download or Clone this Repository


### STEP 2

Copy and replace following files into your project root/folder <br/>
```
/src
/postcss.config.js
/package.json
/webpack.config.js
/webpack.production.config.js
/webpack.staging.config.js
```

### STEP 3
If you need you can import following libraries into your sass/less fil <br/>
```
ANIMATE CSS INCLUDES
AOS
Fancy box
Font awesome
```

### STEP 4

You can mention media queries in web-pack configuration files <br/>
webpack.config.js  - `Line 138--`<br/>
webpack.production.config.js  - `Line 131--`<br/>
webpack.staging.config.js  - `Line 132--`<br/>

For example<br />
```
queries: {
	'(min-width: 768px) and (max-width: 991.98px)': 'tablet',
	'(min-width: 768px)': 'tablet',
	'(min-width: 992px)': 'desktop',
	'(min-width: 992px) and (max-width: 1199.98px)': 'desktop',
	'(min-width: 1200px)': 'desktop'
}
```
Depend on the above noted queries<br /> 
your style will separate in to different files<br />
<br />
For example<br />
According to the above noted queries<br />
you will get the following files<br />
`style-desktop.css` can use for view-port above 992px<br />
`style-tablet.cs`s can use for view-port above 768px<br />
`style.css rest` of the styles will load here<br />
<br />
According to the view port you can load in to your page <br />
```
<link rel="stylesheet" type="text/css" href="dist/style.css" />
<link rel="stylesheet" type="text/css" media="min-width: 768px" href="dist/style-tablet.css" />
<link rel="stylesheet" type="text/css" media="min-width: 992px" href="dist/style-desktop.css" />
```

## USAGE COMMANDS

#### npm run dev
  Minimize JS and CSS files: Disabled<br />
  Mode: development<br />
  Watch : true<br />
  Extract styles according to the media queries<br />
  
#### npm run staging 
  Minimize JS and CSS files: Enabled<br />
  Mode: development<br />
  Watch : true<br />
  Extract styles according to the media queries<br />
  
#### npm run build
  Minimize JS and CSS files: Enabled<br />
  Mode: production<br />
  Watch : false<br />
  Extract styles according to the media queries.<br />
  
#### depcheck
   End of the Project or Sprint you can bale to check unused modules from package.json<br />
   
#### npm-check 
```
Path 
Where to check. Defaults to current directory. Use -g for checking global modules. 

Options
-u, --update         Interactive update
-y, --update-all     Uninteractive update. Apply all updates without prompting
-g, --global         Look at global modules
-s, --skip-unused    Skip check for unused packages
-p, --production     Skip devDependencies
-d, --dev-only       Look at devDependencies only (skip dependencies)
-i, --ignore         Ignore dependencies based on succeeding glob
-E, --save-exact     Save exact version (x.y.z) instead of caret (^x.y.z) in package.json
 --specials          List of depcheck specials to include in check for unused dependencies
--no-color           Force or disable color output.<br />
--no-emoji           Remove emoji support. No emoji in default in CI environments
--debug              Show debug output. Throw in a gist when creating issues on github

Examples
$ npm-check          # See what can be updated, what isn't being used.
$ npm-check ../foo   # Check another path
$ npm-check -gu      # Update globally installed modules by picking which ones to upgrade.
```
