import { FoodAndRecipeProjectPage } from './app.po';

describe('food-and-recipe-project App', () => {
  let page: FoodAndRecipeProjectPage;

  beforeEach(() => {
    page = new FoodAndRecipeProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
