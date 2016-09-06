# grunt-file-exists [![Build Status](https://travis-ci.org/alexeiskachykhin/grunt-file-exists.png?branch=master)](https://travis-ci.org/alexeiskachykhin/grunt-file-exists)

> Check files and folders for existence.



## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-file-exists --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-file-exists');
```




## FileExists task
_Run this task with the `grunt fileExists` command._

### Examples

```js
fileExists: {
  scripts: ['a.js', 'b.js']
}
```

```js
fileExists: {
	scripts: grunt.file.readJSON('scripts.json')
}
```
