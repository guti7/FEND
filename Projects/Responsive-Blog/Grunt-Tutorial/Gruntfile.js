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
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
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
    }
  });

  // Load the plugins that provide tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
  grunt.registerTask('test', ['jshint', 'qunit', 'concat', 'uglify']);

};
