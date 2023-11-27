import axios from "axios";
import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const [advice, setAdvice] = useState([]);
  const onclickHandler = () => {
    axios
      .get(`https://api.adviceslip.com/advice/${number}`)
      .then((res) => {
        if (res.data.slip.advice.length > 31) {
          alert("Your advice is too long to display here");
        } else {
          setAdvice([res.data.slip])
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const hundredAdvice = () => {
    axios
      .get(
        `	https://api.adviceslip.com/advice/search/${"c"}`
      )
      .then((res) => {
        const firstTwoWordsContainC = [...res.data.slips].filter((obj) => {
          let wordsArray =  obj.advice.split(' ');
          let firstTwoWords = wordsArray.slice(0, 2);
          let joinWords =firstTwoWords.join(' ')
          console.log(joinWords)
          return obj.id<101 && joinWords.includes('c');
        });
        setAdvice([...firstTwoWordsContainC]);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      {advice.map((data) => {
        return <p> {data.advice}</p>;
      })}
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        defaultValue={0}
        type="number"
      />
      <button onClick={() => onclickHandler()}>Submit</button>
      <button onClick={() => hundredAdvice()}>Get 100 Advice</button>
    </>
  );
}

export default App;
