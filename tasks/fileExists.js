module.exports = function (grunt) {
    'use strict';


    grunt.registerMultiTask('fileExists', 'Ensures that specified files exist.', function () {
        var files = grunt.file.expand({
            nonull: true
        }, this.data);

        grunt.log.writeln('Checking ' + files.length + ' file' + (files.length !== 1 ? 's' : '') + ' for existence...');

        var filesExist = files.every(function (file) {
            grunt.verbose.write('Checking file: ');
            grunt.verbose.subhead(file);

            var fileExists = grunt.file.exists(file);

            if (!fileExists) {
                grunt.log.error('%s doesn’t exist!', file);
            }

            return fileExists;
        });


        if (filesExist) {
            grunt.log.ok();
        }

        return filesExist;
    });
};
