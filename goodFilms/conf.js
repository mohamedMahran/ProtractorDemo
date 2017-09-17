
// solves `SyntaxError: Unexpected token import`
require("babel-register")({
    presets: [ 'es2015' ]
});

exports.config = {
    /**
     *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
     *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
     *  if you uncomment directConnect.
     */
    //seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    
   
    //directConnect: true,

    specs: ['specs/*Spec.js'],
    baseUrl: 'https://goodfil.ms',
    framework: 'jasmine',

    
    onPrepare: () => {
        // set browser size...
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
        //require('ts-node').register({ project: 'e2e' })
        // better jasmine 2 reports...
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
         jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
        })); 
    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 3,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => {},
        defaultTimeoutInterval: 60000
    }
};