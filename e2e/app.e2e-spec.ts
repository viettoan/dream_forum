import { DreamAngularPage } from './app.po';

describe('dream-angular App', () => {
  let page: DreamAngularPage;

  beforeEach(() => {
    page = new DreamAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
