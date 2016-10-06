import { RevenueexPage } from './app.po';

describe('revenueex App', function() {
  let page: RevenueexPage;

  beforeEach(() => {
    page = new RevenueexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
