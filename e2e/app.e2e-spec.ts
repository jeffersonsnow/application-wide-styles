import { ApplicationWideStylesPage } from './app.po';

describe('application-wide-styles App', () => {
  let page: ApplicationWideStylesPage;

  beforeEach(() => {
    page = new ApplicationWideStylesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
