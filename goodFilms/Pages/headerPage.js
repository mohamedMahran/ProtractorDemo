import BasePage from './basePage';

class headerPage extends BasePage {
    constructor() 
    {
        super();

    }
getNumberOfLinksIntoHeader()
    {
    let defer = protractor.promise.defer();  
    
    $$('#width-container > header > div.site-header-primary > div > div > div > ul  a ').then(function (arr) {
        var promises = [];
        for (var i = 0; i < arr.length; i++) {
            promises.push(arr[i].getAttribute('href'));
        }
    
        Promise.all(promises).then(function (result) { 
            defer.fulfill(result.length);              
        });
    });
        return defer.promise;
    }
}

export default new headerPage();