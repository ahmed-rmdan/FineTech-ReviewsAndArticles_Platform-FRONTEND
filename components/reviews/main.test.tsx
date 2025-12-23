
import { group } from "console";
import { MainReviews } from "./main"
import { render, screen } from "@testing-library/react"
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ reviews: [{title:"test title", description:"test description", mainimage:"http://testimage", score:5, _id:"test id"},
    {title:"test title2", description:"test description2", mainimage:"http://testimage2", score:4, _id:"test id2"},
    {title:"test title3", description:"test description3", mainimage:"http://testimage3", score:3, _id:"test id3"}
    ] }),
  })) as jest.Mock;


  describe('MainReviews component', () => {

  test('scores check', async () => {
     const jsx = await MainReviews()  
  render(jsx)
    const reviewElements = await screen.findAllByRole('button');
    expect(reviewElements.length).toBeGreaterThan(0);

})

  test('main reviews number', async () => {
     const jsx = await MainReviews()  
  render(jsx)
    const reviewElements = await screen.findAllByRole('img');
    expect(reviewElements.length).toEqual(3);

})




  })
