# Theme Work Space

Theme Work Space is only a package of tools that helps you developing and sharing themes with the team.

### Instalation

- Clone the repo.
- run `npm install`.
- run `npm install devbridge-styleguide -g` to install devbridge-styleguide globally.
- run `styleguide initialize` to create devbridge-styleguide configuration files.
- run `gulp` to start.

### How to use
After running `gulp` a browser sync server will start at `http://localhost:3000` listening changes over `app/*.html` and `/src/**/*.scss` files. You can develop a demo inside `http://localhost:3000/demo/` and the style guide created using dev `devbridge-styleguide` rules will shown on `http://localhost:3000/demo/styleguide`.

To read how to work with `devbridge-styleguide` visit http://livingstyleguide.devbridge.com.

### Known Issues
If you have problemas to run `styleguide initialize` take a look at this link https://github.com/devbridge/Styleguide/issues/153

### Tools
- SASS;
- Browsersync;
- [Styleguide](http://livingstyleguide.devbridge.com)
