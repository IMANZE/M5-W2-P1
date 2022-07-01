import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyBadge from './component/MyBadge';
import SingleBook from './component/SingleBook';
import BookList from './component/BookList';
import WarningSign from './component/WarningSign';
import fantasyBooks from './fantasyBooks.json'

function App() {
  return (
    <div>
       <MyBadge title="Welcome to Ezi BookStore" color="primary"/>
       <SingleBook book={fantasyBooks[0]} />
       <BookList books={fantasyBooks} />
       <WarningSign text="Watch out again!" />
    </div>
  );
}

export default App;
