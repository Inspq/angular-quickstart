module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      template: {
          src: ['**/*.{html,css}'],
          dest: 'build',
          cwd: 'src',
          expand: true,
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['copy:template']);
};