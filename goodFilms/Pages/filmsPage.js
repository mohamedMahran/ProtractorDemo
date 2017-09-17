import BasePage from './basePage';


class filmPage extends BasePage {
    constructor() 
    {
        super();

        this.heading_h1 =$('#width-container > div:nth-child(6) > div.hero-nav > div.content > div.wayfinder > h1');
        
        this.url='films'
    }
    verifyHeader()
    {
        return this.heading_h1.getText();
    }
    getLinksUrl()
    {
        let defer = protractor.promise.defer();  
        $$(' #width-container > div:nth-child(6) > div.hero-nav > div.content > div.wayfinder > ul a').then(function (arr) {
            var promises = [];
            for (var i = 0; i < arr.length; i++) {
                promises.push(arr[i].getAttribute('href'));
            }
        
            Promise.all(promises).then(function (result) {
                 
                defer.fulfill(result);              
            });
        });
      
        return defer.promise;
    }
}
    export default new filmPage();