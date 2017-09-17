import BasePage from './basePage';

var promise = require('selenium-webdriver').promise;

class homePage extends BasePage {
    
    constructor() 
    {
        super();

        this.heaedrH1 = $(' div.section-block > div > div > div > h1');
        this.hero_actions_images = $$('div > div.hero-actions > div img');
        this.speech_bubble_text = $('div > div > strong');
        this.show_signup_link = $('div.wrapper-glow > div > div.speech-bubble > div > div > strong > a');
        this.welcome_message_text = $(' div.authentication_module.modules > div > div > h1');
        this.content_welcome_text = $('div:nth-child(7) > div:nth-child(3) > div > div > div.column.one.divider.divider-left > h2 > strong');
        this.most_popular_films_image = $$('#width-container > div:nth-child(7) > div:nth-child(3) > div > div > div.column.three.padded > ul img')
        this.pageLoaded = this.inDom($('div > div.hero-actions > div '));
        
        this.url='/';
    }
    getHeaderText()
    {
        return this.heaedrH1.getText();
    }
   
    getImageSrc()
    {
        let defer = protractor.promise.defer();  
        
        $$('div > div.hero-actions > div img').then(function (arr) {
            var promises = [];
            for (var i = 0; i < arr.length; i++) {
                promises.push(arr[i].getAttribute('src'));
            }
        
            Promise.all(promises).then(function (result) {
                // print the results when the lookups and processing are done                
                // console.log(result.length);
                // console.log(result);  
                defer.fulfill(result);              
            });
        });
      
        return defer.promise;
    }                       ;
        
    pressSignUp()
    {
        this.show_signup_link.click();
        browser.sleep(800);
        
    }
    getWelecomeMessage()
    {
        return this.welcome_message_text.getText();
    }
    openAllLinks()
    {
        let size=8;
       
        $$('#width-container > div:nth-child(7) > div:nth-child(3) > div > div > div.column.three.padded > ul > li img  ').each(function(element, index)
            {
            if (index < size)
                {
                    $$('#width-container > div:nth-child(7) > div:nth-child(3) > div > div > div.column.three.padded > ul > li img  ').get(index).click();
                     browser.getCurrentUrl().then(function(actualUrl) {
                         console.log(actualUrl);
                    
                    });
                    browser.navigate().back(); 
                }  
            });
    } 
  
    getLinksUrl()
        {
            let defer = protractor.promise.defer();  
            $$(' #width-container > div:nth-child(7) > div:nth-child(3) > div > div > div.column.three.padded > ul a').then(function (arr) {
                var promises = [];
                for (var i = 0; i < arr.length; i++) {
                    promises.push(arr[i].getAttribute('href'));
                }
            
                Promise.all(promises).then(function (result) {
                    // print the results when the lookups and processing are done                
                    // console.log(result.length);
                    // console.log(result);  
                    defer.fulfill(result);              
                });
            });
          
            return defer.promise;
        }                       
}   
export default new homePage();