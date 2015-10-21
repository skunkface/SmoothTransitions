module.exports = function(grunt) {
  grunt.initConfig({
    serve: {
      options: {
        port: 9008,
        silently: true
      }
    },
    open: {
      build: {
        path: 'http://localhost:9008/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', ['open', 'serve']);

};
