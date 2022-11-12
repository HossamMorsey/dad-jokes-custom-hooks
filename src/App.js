import "./App.css";

import useFetchJoke from "./UseFetchJoke/useFetchJoke";
import LaughingImgs from "./LaughingImgs/LaughingImgs";

function App() {
  const [joke, getNewJoke, img] = useFetchJoke();
  return (
    <div className="App">
      <div>
        <header>Dad Jokes Custom Hook</header>
        <div className="joke">
          <p>{joke}</p>
        </div>
        <button className="new_joke" onClick={getNewJoke}>
          Get a new one !!
        </button>
      </div>

      <div>
        <LaughingImgs imgNumber={img} />
      </div>
    </div>
  );
}

export default App;
