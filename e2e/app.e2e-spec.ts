import { SearchNg4TestPage } from './app.po';

describe('search-ng4-test App', () => {
  let page: SearchNg4TestPage;

  beforeEach(() => {
    page = new SearchNg4TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
