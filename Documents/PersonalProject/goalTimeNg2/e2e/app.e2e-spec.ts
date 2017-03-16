import { GoalTimeNg2Page } from './app.po';

describe('goal-time-ng2 App', () => {
  let page: GoalTimeNg2Page;

  beforeEach(() => {
    page = new GoalTimeNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
