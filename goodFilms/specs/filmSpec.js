import filmPage from '../pages/filmsPage';


describe('open good films site', () =>  {
	beforeEach(() =>  {
		filmPage.goto();
	});
	it('should verify header h1 is already exist', () => {
		expect(filmPage.verifyHeader()).toBe('Films');
	});
	it(' verify links is already displayed into film page', () => {
		let top50="/top-50s";
        
        expect(filmPage.getActualUrl()).toContain(netFlixSrc);
        
	});
});
