module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({


    less: {
        development: {
            options: {
                paths: ["assets/css"]
            },
            files: {
                "app/css/main.css": "app/less/main.less",
                "app/css/fluidable.css": "app/less/fluidable.less"
            }
    }

    },

    watch: {
        less: {
            files: ['**/*.less','!**/min.*'],
            tasks: ['less'],
            options: {
                spawn: false
            }
        }
    }

    });


    grunt.registerTask('default',['less']);
    grunt.registerTask('watchcss',['watch:less']);

}
