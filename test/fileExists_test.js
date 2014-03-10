'use strict';

var grunt = require('grunt');
var exec = require('child_process').exec;


exports.exists = {
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
    }
};