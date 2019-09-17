module.exports = function (grunt) {
    grunt.initConfig({
        purifycss: {
            target: {
                src: ['*.html', 'public/js/*.js'],
                css: ['public/css/bootstrap.css', 'public/css/base.css', 'public/css/Fonts.css', 'public/css/main.css'],
                dest: 'public/css/style-min.css'
            }
        },
    });


    grunt.loadNpmTasks('grunt-purifycss');
}