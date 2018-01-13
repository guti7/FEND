module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // tasks configuration properties
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today() %> */\n' //date argument "yyyy-mm-dd"
      },
      build: { // target
        src: 'js/**/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    concat: {
      options: {
        // String to put between each file in the concatenated output
        separator: ';',
        banner: '/*! <%= pkg.name %>.concat - v<%= pkg.version %> - ' +
        '<%= grunt.template.today() %> */\n'
      },
      dist: {
        // Files to concatenate
        src: ['src/**/*.js'],
        // Location of the output JS file
        dest: 'js/<%= pkg.name %>.concat.js'
      },
    },

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', 'js/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  // Load the plugins that provide tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};
