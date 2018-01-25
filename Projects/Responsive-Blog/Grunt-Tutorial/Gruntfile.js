module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // tasks configuration properties
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %>.min - v<%= pkg.version %> - ' +
        '<%= grunt.template.today() %> */\n' //date argument "yyyy-mm-dd"
      },
      build: { // target
        src: ['<%= concat.dist.dest %>'],
        dest: 'build/<%= pkg.name %>.min.js'
        // files: {
        //   'build/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        // }
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
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
          // console: true,
          // module: true
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },

      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },

      css: {
        files: ['css/**/*.{css,scss}'],
        tasks: ['sass'],
      }
    },

    qunit: {
      files: ['test/**/*.html']
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build'
        }]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.{css,scss}'],
          dest: 'css/build',
          ext: '.css'
        }]
      }
    }
  });

  // Load the plugins that provide tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
  grunt.registerTask('test', ['jshint', 'qunit', 'concat', 'uglify']);

};
