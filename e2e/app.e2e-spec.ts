import { UdemyDirectivesPage } from './app.po';

describe('udemy-directives App', function() {
  let page: UdemyDirectivesPage;

  beforeEach(() => {
    page = new UdemyDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
