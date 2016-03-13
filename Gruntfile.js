module.exports = function(grunt){
  grunt.initConfig({
    svgmin: {
      options: {
        plugins: [
          { removeTitle: true },
          { addClassesToSVGElement: { className: 'icon'} }
        ]
      },
      all: {
        files: [{
          expand: true,
          cwd: 'src/icons/',
          src: ['*.svg'],
          dest: 'dist/icons/'
        }]
      }
    },
    sass: {
      options: {
        sourcemap: 'none'
      },
      all: {
        files: {
          'dist/icons.css': ['app/assets/stylesheets/dvl/icons.scss']
        }
      }
    },
    template: {
      definitions: {
        options: {
          data: function(){
            var icons = {};
            var files = grunt.file.expand('dist/icons/*.svg');
            for (i in files) {
              var fp = files[i];
              var iconName = fp.split('/')[2].split('.')[0];
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
          'lib/dvl/icons/definitions.rb': ['src/definitions.rb.tpl']
        }
      },
      preview: {
        options: {
          data: function(){
            var icons = {};
            var files = grunt.file.expand('dist/icons/*.svg');
            for (i in files) {
              var fp = files[i];
              var iconName = fp.split('/')[2].split('.')[0];
              var svg = grunt.file.read(fp);
              icons[iconName.toUpperCase()] = svg;
            }
            return {
              icons: icons,
              css: grunt.file.read('app/assets/stylesheets/dvl/icons.css')
            };
          }
        },
        files: {
          'preview.html': ['src/preview.html.tpl']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-template');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['svgmin', 'template']);
}
