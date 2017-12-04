import { HerosPage } from './app.po';

describe('heros App', function() {
  let page: HerosPage;

  beforeEach(() => {
    page = new HerosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
