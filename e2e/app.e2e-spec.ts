import { AngularWidgetPage } from './app.po';

describe('angular-widget App', () => {
  let page: AngularWidgetPage;

  beforeEach(() => {
    page = new AngularWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
