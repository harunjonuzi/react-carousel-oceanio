import Slider from "./components/Slider";
import SliderData from "./constants/sliderData";

function App() {
  return (
    <div className="app">
      <Slider slides={SliderData} />
    </div>
  );
}

export default App;
