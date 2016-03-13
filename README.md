dvl-icons
----

Takes `<svg>` source files, generates Ruby helpers and a small CSS snippet for use in our apps.

## Developing

- `npm install`
- Edit SVG files in `src/icons/` directory
- Run `grunt`
- Check output in `preview.html`

## Usage (Rails)

- `gem 'dvl-icons'` in Gemfile
- `@import 'dvl/icons'` in asset manifest
- `icon('activity')` in views

## Usage (Jekyll)

- `gem 'dvl-icons'` in Gemfile
- `@import 'dvl/icons'` in asset manifest
- Helper TBD

## Usage (Other)

- Compiled CSS and minified SVGs are in `dist/icons/`
