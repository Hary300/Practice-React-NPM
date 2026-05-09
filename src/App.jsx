import Header from './components/Header';
import LikeDislikeButton from './components/LikeDislikeButton';
import FruitList from './components/FruitList';
import Counter from './components/Counter';
import ShowHideText from './components/ShowHideText';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <>
      <Header />
      <div className='components-container'>
        <LikeDislikeButton />
        <FruitList />
        <Counter />
        <ShowHideText />
        <SearchFilter />
      </div>
    </>
  );
}

export default App;
