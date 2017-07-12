import { NgTttUiPage } from './app.po';

describe('ng-ttt-ui App', () => {
  let page: NgTttUiPage;

  beforeEach(() => {
    page = new NgTttUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
