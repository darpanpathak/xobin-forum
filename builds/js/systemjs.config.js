/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': '../app', // 'dist',
    '@angular': '@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs': 'rxjs',
    'angular2-jwt': 'angular2-jwt',
    'ng2-pagination': 'ng2-pagination/dist',
    'ng2-nvd3': 'ng2-nvd3/build/lib'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': {
      main: 'main.js',
      defaultExtension: 'js'
    },
    'rxjs': {
      defaultExtension: 'js'
    },
    'angular2-in-memory-web-api': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    'ng2-pagination': {
      main: 'ng2-pagination.js',
      defaultExtension: 'js'
    },
    'ng2-nvd3': {
      main: 'ng2-nvd3.js',
      defaultExtension: 'js'
    }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = {
      main: 'index.js',
      defaultExtension: 'js'
    };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = {
      main: 'bundles/' + pkgName + '.umd.js',
      defaultExtension: 'js'
    };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);