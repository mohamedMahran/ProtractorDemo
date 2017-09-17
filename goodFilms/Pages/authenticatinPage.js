import BasePage from './basePage';


class authenticatinPage extends BasePage {
    constructor() 
    {
        super();

        this.sign_up =$('div.authentication_module.modules > div > div > div > div:nth-child(2) > div > div > a');
        this.sign_up_with_twitter=$(' div.authentication_module.modules > div > div > div > div:nth-child(2) > div > a.btn-auth.btn-twitter.large');
        this.sign_up_with_face_book = $('div.authentication_module.modules > div > div > div > div:nth-child(2) > div > a.btn-auth.btn-facebook.large');
       
    }
    signUpWithYourEmailAddress()
    {
        this.sign_up.click();
     }
    getTwitterButtonUrl()
    {
        return  this.sign_up_with_twitter.getAttribute('href');
    }
    getFaceBookUrl()
    {
        return this.sign_up_with_face_book.getAttribute('href');
    }
}

export default new authenticatinPage();