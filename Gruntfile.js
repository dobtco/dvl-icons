module.exports = function(grunt){
  grunt.initConfig({
    svgmin: {
      options: {
        plugins: [
          { removeViewBox: false },
          { removeUselessStrokeAndFill: false }
        ]
      },
      all: {
        files: [{
          expand: true,
          cwd: 'icons/',
          src: ['*.svg'],
          dest: 'icons/'
        }]
      }
    },
    template: {
      definitions: {
        options: {
          data: function(){
            var icons = {};
            var files = grunt.file.expand('icons/*.svg');
            for (i in files) {
              var fp = files[i];
              var iconName = fp.split('/')[1].split('.')[0];
              var svg = grunt.file.read(fp);

              // Add .icon and .icon_* classes to svg strings
              svg = svg.replace('<svg', '<svg class="icon icon_' + iconName + '"');

              icons[iconName.toUpperCase()] = '%{' + svg + '}';
            }
            return { icons: icons };
          }
        },
        files: {
          'lib/dvl/icons/definitions.rb': ['support/definitions.rb.tpl']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-template');
  grunt.registerTask('default', ['svgmin', 'template']);
}
