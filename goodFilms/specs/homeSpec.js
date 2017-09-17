import homePage from '../pages/homePage';
import authenticationPage from '../pages/authenticatinPage';
import headerPage from '../pages/headerPage';

describe('open good films site', () =>  {
	beforeEach(() =>  {
		homePage.goto();
	});

    it('verify the header contain 7 links',()=>{
        expect(headerPage.getNumberOfLinksIntoHeader()).toBe(7);
    });

	it(' verify header h1 is already exist', () => {
		expect(homePage.getHeaderText()).toBe('Find great films on your favourite service');
    });

    it(' verify that the number of services 4 in the hero actions item ',() =>{
        expect(homePage.hero_actions_images.count()).toBe(4);
    });

    it(' verify that image src for hero actions items are correct  ',() =>{
        
        let netFlixSrc="https://goodfil.ms/assets/welcome/hero-action-netflix-27c9ebd2da6f128a5eec9437ff376a29.jpg";
        let appleTV="https://goodfil.ms/assets/welcome/hero-action-appletv-3995356b0c43f1a90fb54338883702eb.jpg";
        let amazonVideo="https://goodfil.ms/assets/welcome/hero-action-amazon-7a71d2d331d9627f7b98855e47a2e3c4.jpg";
        let hulu="https://goodfil.ms/assets/welcome/hero-action-hulu-37b763724a28dd79dc2259a78e05f7cf.jpg";
      
        expect(homePage.getImageSrc()).toContain(netFlixSrc);
        expect(homePage.getImageSrc()).toContain(appleTV);
        expect(homePage.getImageSrc()).toContain(amazonVideo);
        expect(homePage.getImageSrc()).toContain(hulu);

    });
    it('verify that the location of the signuplink  below facoursit services',()=>{
        var initTop = 0;
        var initLeft = 0;
    
        element(by.css('div > div.hero-actions > div')).getLocation().then(function (div1) {
            initTop = div1.y;
            initLeft = div1.x;
    
        element(by.css('div > div.speech-bubble')).getLocation().then(function (div2) {
            let currTop = div2.y;
            let currLeft = div2.x;
    
        expect(currLeft).toBeGreaterThan(initLeft);
        expect(currTop).toBeGreaterThan(initTop);
            });
        });
    
    });
    it('verify that the sign up link will open authentication module ',()=>{
            homePage.pressSignUp();
            expect(homePage.getWelecomeMessage()).toBe('Oh, hello! Welcome to Goodfilms');
            authenticationPage.signUpWithYourEmailAddress();
            
    });
    it('verify that the twitter button linked to twitter Page',()=>{
            homePage.isVisible(homePage.show_signup_link);
            homePage.pressSignUp();
            expect(authenticationPage.getTwitterButtonUrl()).toBe('https://goodfil.ms/users/auth/twitter');
            expect(authenticationPage.getFaceBookUrl()).toBe('https://goodfil.ms/users/auth/facebook');
    });
    it ('verify the most popular films this week has been displayed ', ()=> {
            homePage.ScrollTo(homePage.content_welcome_text);
            browser.sleep(1000);
            homePage.openAllLinks();
            expect(homePage.most_popular_films_image.count()).toBe(8);
            
    });
    it ('verify products item', ()=> {
        homePage.ScrollTo(homePage.content_welcome_text);
        homePage.getLinksUrl().then(function(links){
            expect(links).toContain('https://goodfil.ms/film/354987-it');;
        });
    });
    
});