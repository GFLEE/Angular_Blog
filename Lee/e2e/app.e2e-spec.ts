import { LeePage } from './app.po';

describe('lee App', function() {
  let page: LeePage;

  beforeEach(() => {
    page = new LeePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
