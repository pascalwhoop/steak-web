import { SteakWebPage } from './app.po';

describe('steak-web App', function() {
  let page: SteakWebPage;

  beforeEach(() => {
    page = new SteakWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
