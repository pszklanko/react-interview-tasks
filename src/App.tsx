import Accordion from './accordion';
import ImageSlider from './image-slider';
import RandomColor from './random-color';
import StarRating from './star-rating';

function App() {
  return (
    // <Accordion></Accordion>
    // <RandomColor></RandomColor>
    // <StarRating noOfStars={20}></StarRating>
    <ImageSlider url={'https://picsum.photos/v2/list'} limit={5}></ImageSlider>
  );
}

export default App;
