module.exports = function(grunt){
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'icons/*.svg',
        dest: 'dist',
        options: {
          font: 'dvl-icons',
          hashes: false,
          stylesheet: 'scss',
          htmlDemoTemplate: 'support/demo_template.html',
          codepointsFile: 'support/codepoints.json'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.registerTask('default', ['webfont']);
}
