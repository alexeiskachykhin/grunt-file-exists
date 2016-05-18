'use strict';

var grunt = require('grunt');
var exec = require('child_process').exec;


module.exports = {
    shouldFindAllFiles: function (test) {
        test.expect(1);

        exec('grunt "fileExists:all"', function (error, stdout, stderr) {
            test.ifError(error);
            test.done();
        });
    },

    shouldNotFindAnyFiles: function (test) {
        test.expect(1);

        exec('grunt "fileExists:none"', function (error, stdout, stderr) {
            test.ok(error);
            test.done();
        });
    },

    shouldNotFindAllFiles: function (test) {
        test.expect(1);

        exec('grunt "fileExists:some"', function (error, stdout, stderr) {
            test.ok(error);
            test.done();
        });
    },
    
    shouldNotFailOnEmptySetOfFiles: function (test) {
        test.expect(1);

        exec('grunt "fileExists:empty"', function (error, stdout, stderr) {
            test.ifError(error);
            test.done();
        });
    },

    shouldPluralizeOutputOnMultipleFiles: function (test) {
        test.expect(1);

        exec('grunt "fileExists:all"', function (error, stdout, stderr) {
            var isPlural = stdout.indexOf(' files ') > -1;
            test.ok(isPlural);
            test.done();
        });
    },

    shouldPluralizeOutputOnZeroFiles: function (test) {
        test.expect(1);

        exec('grunt "fileExists:empty"', function (error, stdout, stderr) {
            var isPlural = stdout.indexOf(' files ') > -1;
            test.ok(isPlural);
            test.done();
        });
    },

    shouldNotPluralizeOutputOnSingleFile: function (test) {
        test.expect(1);

        exec('grunt "fileExists:single"', function (error, stdout, stderr) {
            var isNotPlural = stdout.indexOf(' file ') > -1;
            test.ok(isNotPlural);
            test.done();
        });
    }
};