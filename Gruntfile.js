'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            src: 'src',
            dist: 'dist'
        },
        assemble: {
            options: {
                flatten: true,
                assets: '<%= config.src %>/assets',
                layoutdir: '<%= config.src %>/templates/layouts',
                data: '<%= config.src %>/data/*.{json,yml}',
                partials: '<%= config.src %>/templates/partials/**/*.hbs',
                marked: {
                    breaks: false,
                    gfm: true,
                    //                    highlight: function (code, lang, callback) {
                    //                        pygmentize({
                    //                                lang: lang,
                    //                                format: 'html'
                    //                            },
                    //                            code,
                    //                            function (err, result) {
                    //                                callback(err, result.toString());
                    //                            }
                    //                        );
                    //                    },
                    langPrefix: 'language-',
                    pedantic: false,
                    sanitize: false,
                    silent: false,
                    smartLists: false,
                    smartypants: false,
                    tables: true
                }
            },
            pages: {
                options: {
                    flatten: true,
                    assets: '<%= config.dist %>/assets'
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/templates/pages/',
                    src: '**/*.hbs',
                    dest: '<%= config.dist %>/'
                }]
            }
        },
        less: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/less/',
                    src: ['*.less'],
                    dest: '<%= config.dist  %>/assets/css/',
                    ext: '.css'
                }]
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/assets/',
                    src: '**',
                    dest: '<%= config.dist %>/assets/'
                }]
            }
        },
        clean: ['<%= config.dist %>/**/*'],
        watch: {
            pages: {
                files: '<%= config.src %>/{templates,data}/**',
                tasks: ['newer:assemble']
            },
            assets: {
                files: '<%= config.src %>/assets/**',
                tasks: ['newer:copy']
            },
            styles: {
                files: '<%= config.src %>/less/**',
                tasks: ['less']
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: '<%= config.src %>/components'
                }
            }
        },
        'http-server': {
            'dev': {
                root: './dist',
                port: '8000',
                host: '0.0.0.0',
                ext: 'html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('assemble');

    grunt.registerTask('init', ['bower:install']);
    grunt.registerTask('generate', ['assemble', 'less', 'copy']);
    grunt.registerTask('build', ['clean', 'generate']);
    grunt.registerTask('serve', ['http-server']);
    grunt.registerTask('default', ['clean', 'build', 'watch']);
};
