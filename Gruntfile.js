module.exports = function (grunt) {
    "use strict";
    var path = require('path');

    // load all grunt tasks from the package.json file using load-grunt-tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: 'public/scss/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                    nospawn: true
                }
            },
            app: {
                files: ['app.js', 'routes/*.js', 'views/**/*.jade'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            options: {
            },
            dev: {
                files: {
                    'public/css/app.css': 'public/scss/app.scss'
                }
            }
        },
        nodemon: {
            dev: {
                options: {
                    watchedExtensions: ['js','jade'],
                    watchedFolders: ['server','views']
                }
            }
        },
        concurrent: {
            dev: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/images',
                    src: ['**/*.svg'],
                    dest: 'public/images/',
                    ext: '.svg'
                }]
            }
        }
    });

    grunt.registerTask('default', ['concurrent']);

};
