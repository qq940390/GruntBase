module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                spawn: false
            },
            html: {
                files: [  //下面文件的改变就会实时刷新网页
                    'index.html',
                ],
                tasks: ['copy:dev', 'bsReload:html']
            },
            js: {
                files: [  //下面文件的改变就会实时刷新网页
                    'src/js/*.js'
                ],
                tasks: ['babel', 'bsReload:js']
            },
            scss: {
                files: [  //下面文件的改变就会实时刷新网页
                    'src/scss/**/*.scss'
                ],
                tasks: ['sass:dev', 'autoprefixer', 'bsReload:css']
            }

        },
        clean: ['dist'],
        copy: {
            dev: {
                files: [{
                    expand: false,
                    flatten: false,
                    dest: 'dist/',
                    src: 'index.html'
                }]
            }
        },
        sass: {
            dev: {
                options: {
                    sourcemap: 'auto', // 可选 auto, file, inline, none
                    style: 'expanded', // 可选 nested, compact, compressed, expanded
                },
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['**/*.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            },
        },
        cssmin: {
            options: {
                compatibility: 'ie8', //设置兼容模式
                noAdvanced: true //取消高级特性
            },
            minify: {
                expand: true,
                cwd: 'dist/css/',
                src: ['*\*/\*.css', '!*.min.css'], //.css文件，但不包括.min.css文件
                dest: './dist/css',
                ext: '.min.css'
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                expand: true,
                cwd: './src/js/', //js目录下
                src: ['**/*.js'], //所有js文件
                dest: 'dist/js/'  //输出到此目录下
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                expand: true,            //将占位符*展开 即使用占位符匹配文件名
                src: 'dist/**/*.js',       //压缩src目录及所有子目录下的js文件
                dest: './',             //压缩文件存放到dist目录下的同名目录
                ext: '.min.js',           //压缩文件的后缀名
                options: {
                    sourceMap: true
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 5 versions', 'ie 8']
            },
            css: {
                src: 'src/scss/**/*.css',
                dest: 'dist/css/**/*.css'
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'index.html',
                        'src/js/**/*.js'
                    ]
                },
                options: {
                    background: true,
                    watchTask: true,
                    server: {
                        baseDir: "./dist/"
                    }
                }
            }
        },
        bsReload: {
            html: {
                reload: "index.html"
            },
            css: {
                reload: ".css"
            },
            js: {
                reload: ".js"
            },
            all: {
                reload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('browser', [
        'copy',
        'sass',
        'babel',
        'browserSync',
        'watch',
    ]);

    grunt.registerTask('default', [
        'clean',
        'sass',
        'cssmin',
        'babel',
        'uglify'
    ]);

};
