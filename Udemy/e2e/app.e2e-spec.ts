import { UdemyPage } from './app.po';

describe('udemy App', () => {
  let page: UdemyPage;

  beforeEach(() => {
    page = new UdemyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
