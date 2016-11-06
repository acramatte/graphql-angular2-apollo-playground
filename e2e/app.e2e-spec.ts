import { GraphqlAngular2ApolloPlaygroundPage } from './app.po';

describe('graphql-angular2-apollo-playground App', function() {
  let page: GraphqlAngular2ApolloPlaygroundPage;

  beforeEach(() => {
    page = new GraphqlAngular2ApolloPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
