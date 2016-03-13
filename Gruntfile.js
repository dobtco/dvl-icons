module.exports = function(grunt){
  grunt.initConfig({
    svgmin: {
      options: {
        plugins: []
      },
      all: {
        files: [{
          expand: true,
          cwd: 'icons/',
          src: ['*.svg'],
          dest: 'icons_min/'
        }]
      }
    },
    template: {
      definitions: {
        options: {
          data: function(){
            var icons = {};
            var files = grunt.file.expand('icons_min/*.svg');
            for (i in files) {
              var fp = files[i];
              var iconName = fp.split('/')[1].split('.')[0];
              var svg = grunt.file.read(fp);

              // Remove <svg> tag from icon
              var bits = svg.split('><');
              bits.shift();
              var svgPathsOnly = '<' + bits.join('><').replace('</svg>', '');
              icons[iconName.toUpperCase()] = '%{' + svgPathsOnly + '}';
            }
            return { icons: icons };
          }
        },
        files: {
          'lib/dvl/icons/definitions.rb': ['support/definitions.rb.tpl']
        }
      }
    },
    clean: {
      icons: ['icons_min/']
    }
  });

  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-template');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['svgmin', 'template', 'clean']);
}
