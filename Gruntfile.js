module.exports = function(grunt){
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'icons/*.svg',
        dest: 'dist',
        options: {
          hashes: false,
          stylesheet: 'scss',
          htmlDemoTemplate: 'demo_template.html',
          codepointsFile: 'codepoints.json'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.registerTask('default', ['webfont']);
}
