import { CheffAppPage } from './app.po';

describe('cheff-app App', () => {
  let page: CheffAppPage;

  beforeEach(() => {
    page = new CheffAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
