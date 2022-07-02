Task description;

Start by creating a new React application by using the create-react-app command.
Include into your project bootstrap@4.6.1 and react-bootstrap@1.6.4.

 

1. Create a component called MyBadge which receives a string of text and a color as props.
This component should render a Badge component with those properties.
2. Create a SingleBook component as a class. The component receives a book object as a prop, and displays the cover and the title of the book.
Use react-bootstrap Cards to display a book (the book object can be read from one of the .json files we gave you yesterday).
3. Create a BookList component. This component receives by props a list of books and displays them using the SingleBook component.
4. Create a filterBookList function. By writing into an input field a search query, the BookList should show only the books containing the specified string into the title (hint: save the query into the BookList component state and filter the books accordingly).
5. Create a state object in the SingleBook component containing a selected boolean property. Clicking on the book cover should toggle its selected state property, from true to false and viceversa. If the selected property is true, the SingleBook should have some styling that reflects that state change, visually. (maybe you can put a border on it)
