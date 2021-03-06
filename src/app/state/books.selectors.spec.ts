import {AppState} from "./books.state";
import {Selector} from "./books.selectors";

describe('Book Selectors', () => {

  let initialState: AppState = {
    bookStore: {
      books:[
        {id: 1, title: "Finding Me", author: "Viola Davis", description: "The multiple award-winning actress describes the difficulties she encountered before claiming her sense of self and achieving professional success."},
        {id: 2, title: "Killing the Killers", author: "Bill O'Reilly; Martin Dugard", description: "The 11th book in the conservative commentator’s Killing series gives an account of the global war against terrorists."},
        {id: 3, title: "A Sacred Oath", author: "Mark T. Esper", description: "The former secretary of defense gives an account of serving in his post until he was fired by the president after the 2020 election."},
        {id: 4, title: "The Palace Papers", author: "Tina Brown", description: "This follow-up to “The Diana Chronicles” details how the royal family reinvented itself after the death of Princess Diana."},
        {id: 5, title: "This Will Not Pass", author: "Jonathan Martin; Alexander Burns", description: "Two New York Times correspondents chronicle the 2020 election and the first year of the Biden presidency."}
      ],
      selectedBook: undefined,
      showDetail: false
    },
  }

  it('should get the books', () => {
    const result = Selector.books.projector(initialState.bookStore);
    expect(result.length).toBe(5);
  });

  it('should get the selectedBook', () => {
    const result = Selector.selectedBook.projector(initialState.bookStore);
    expect(result).toBeUndefined();
  });

  it('should get the showDetail', () => {
    const result = Selector.showDetail.projector(initialState.bookStore);
    expect(result).toBe(false);
  });

});
