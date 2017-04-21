import { AngularBeefeePage } from './app.po';

describe('angular-beefee App', () => {
  let page: AngularBeefeePage;

  beforeEach(() => {
    page = new AngularBeefeePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
