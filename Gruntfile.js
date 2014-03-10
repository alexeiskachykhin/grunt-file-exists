module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            all: [
              'Gruntfile.js',
              'tasks/*.js',
              '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            },
        },

        jsonlint: {
            all: {
                src: ['package.json', '.jshintrc']
            }
        },

        nodeunit: {
            tests: ['test/*_test.js'],
        },

        fileExists: {
            all: ['test/fixtures/*.txt'],
            none: ['test/fixtures/missing.txt'],
            some: ['<%= exists.all %>', '<%= exists.none %>'],
        }
    });


    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-jsonlint');

    grunt.registerTask('test', ['nodeunit']);
    grunt.registerTask('default', ['jshint', 'jsonlint', 'test']);
};

