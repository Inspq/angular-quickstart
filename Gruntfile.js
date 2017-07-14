module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      template: {
          src: ['**/*.{html,css}'],
          dest: 'build',
          cwd: 'src',
          expand: true,
      }
    },
    clean: {
      build: {
        src:['build/']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['copy:template', 'clean:build']);
};