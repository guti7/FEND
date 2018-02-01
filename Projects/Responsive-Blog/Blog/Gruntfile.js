/*
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      options: {
        engine: 'im',
        separator: '_'
      },
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: '_large_2x',
            quality: 30
          }, {
            width: 1600,
            suffix: '_large_1x',
            quality: 15
          }, {
            width: 800,
            suffix: '_medium_2x',
            quality: 30
          }, {
            width: 800,
            suffix: '_medium_1x',
            quality: 15
          }, {
            width: 500,
            quality: 15,
            suffix: '_default_1x'
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Copy the "fixed" images that don't go through processing */
    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: 'images_src/',
          src: '*/*.{gif,jpg,png}',
          dest: 'images/',
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['responsive_images', 'copy']);

};
