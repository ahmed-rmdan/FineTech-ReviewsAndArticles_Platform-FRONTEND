
import { group } from "console";
import { MainPosts } from "./mainposts";
import { render, screen } from "@testing-library/react"
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ posts: [{title:"test title",comments:[''],likes:[''],view:0, description:"test description", mainimage:"http://testimage", _id:"test id"},
    {title:"test title2",comments:[''],likes:[''],view:0, description:"test description2", mainimage:"http://testimage2",  _id:"test id2"},
    {title:"test title3",comments:[''],likes:[''],view:0, description:"test description3", mainimage:"http://testimage3", _id:"test id3"},
    {title:"test title3",comments:[''],likes:[''],view:0, description:"test description3", mainimage:"http://testimage3", _id:"test id3"},
    {title:"test title3",comments:[''],likes:[''],view:0, description:"test description3", mainimage:"http://testimage3", _id:"test id3"},
    {title:"test title3",comments:[''],likes:[''],view:0, description:"test description3", mainimage:"http://testimage3", _id:"test id3"}
    ] }),
  })) as jest.Mock;


  describe('MainPosts component', () => {

  test(' check', async () => {
     const jsx = await MainPosts()  
  render(jsx)
    const postElements = await screen.findAllByRole('img');
    expect(postElements.length).toEqual(6);

})

  test('main posts number', async () => {
     const jsx = await MainPosts()  
  render(jsx)
    const postElements = screen.getAllByText('ALL POSTS');
    expect(postElements.length).toBeGreaterThan(0);

})




  })
