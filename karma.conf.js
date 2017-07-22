module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],
    client: {
      builtPaths: ['build/', 'build/tests/unit/']
    },
    files: [
        'node_modules/systemjs/dist/system.src.js',

        // Polyfills
        'node_modules/core-js/client/shim.js',
        'node_modules/reflect-metadata/Reflect.js',

        // zone.js
        'node_modules/zone.js/dist/zone.js',
        'node_modules/zone.js/dist/long-stack-trace-zone.js',
        'node_modules/zone.js/dist/proxy.js',
        'node_modules/zone.js/dist/sync-test.js',
        'node_modules/zone.js/dist/jasmine-patch.js',
        'node_modules/zone.js/dist/async-test.js',
        'node_modules/zone.js/dist/fake-async-test.js',

        { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
        { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

        { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
        { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
        'karma-test-shim.js',

        { pattern: 'systemjs-angular-loader.js', included: false, watched: false },
        { pattern: 'systemjs.config.js', included: false, watched: false },
        
        { pattern: 'build/tests/unit/**/*.spec.js', included: false, watched: true },
        { pattern: 'build/tests/unit/**/*.spec.js.map', included: false, watched: true },

        { pattern: 'build/app/**/*.js', included: false, watched: true },
        { pattern: 'src/app/**/*.ts', included: false, watched: true },
        { pattern: 'src/tests/unit/**/*.ts', included: false, watched: true },
        { pattern: 'build/app/**/*.js.map', included: false, watched: true },
        { pattern: 'build/app/**/*.html', included: false, watched: true },
        { pattern: 'build/app/**/*.css', included: false, watched: true },
    ],

    proxies: {
        "/build/app/": "/base/build/app/"
    },

    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};