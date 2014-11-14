# TroopJS Widget QuickStart

This project is a minimal skeleton for creating [troopjs-widget](https://github.com/troopjs/troopjs-widget/) based applications.

## Installation

```bash
# clone the quickstart
git clone https://github.com/troopjs/troopjs-widget-quickstart.git my-project

# change dir
cd my-project

# install browser dependencies
bower install
```

Now you are ready to try it out!

```bash
# try it out in firefox
firefox ./index.html
```

## Configuration

After installation you should have a project that looks something like this:

```
.
├── bower_components    # browser dependencies installed by bower
├── bower.json          # bower configuration file
├── Gruntfile.js        # grunt configuration file
├── index.html          # application html
├── index.js            # application js
├── main.js             # main bundle file
├── package.json        # npm configuration file
├── README.md           # this file
├── version.js          # application version
└── widget.js           # demo widget
```

Go ahead and change any instance of `troopjs-widget-quickstart` to whatever your project package is called. Here's a list of files that need to be updated:

 - `bower.json`
 - `package.json`
 - `Gruntfile.js`
 - `index.js`
 - `index.html`

## Advanced

If you want to create a build version of your project we've got you covered for that:

```bash
# install node dependencies
npm install

# clean and build
grunt clean default
```

This creates a `dist` folder with your compiled application. If you want to test the compiled version you should first edit `dist/index.js` and add your application package to the `deps` and then you are ready to try it out!

```bash
# try it out in firefox
firefox ./dist/index.html
```
