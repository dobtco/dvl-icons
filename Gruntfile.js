module.exports = function(grunt){
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'icons/*.svg',
        dest: 'tmp',
        options: {
          font: 'dvl-icons',
          hashes: false,
          stylesheet: 'scss',
          fontHeight: 768,
          template: 'support/template.css',
          codepointsFile: 'support/codepoints.json'
        }
      }
    },
    copy: {
      fonts: {
        cwd: 'tmp/',
        src: ['*.{eot,ttf,woff}'],
        dest: 'app/assets/fonts',
        expand: true
      },
      stylesheets: {
        src: 'tmp/_dvl-icons.scss',
        dest: 'app/assets/stylesheets/dvl-icons.scss'
      }
    },
    clean: {
      compiled: ['tmp']
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['webfont', 'copy', 'clean']);
}
