import { useState, useEffect } from "react";
import Ball from "./components/Ball";
import Card from "./components/Card";
import getLottoNumbers from "./hooks/getLottoNumbers";

const LOTTO = [
  {
    name: "Lotto 6/42",
    maxNumber: 42,
  },
  {
    name: "Lotto 6/45",
    maxNumber: 45,
  },
  {
    name: "Lotto 6/49",
    maxNumber: 49,
  },
  {
    name: "Lotto 6/55",
    maxNumber: 55,
  },
  {
    name: "Lotto 6/58",
    maxNumber: 58,
  },
];

function App() {
  const [numbers, setNumbers] = useState([]);
  const [maxNumber, setMaxNumber] = useState(42);

  useEffect(() => {
    const lottoNumbers = getLottoNumbers(maxNumber);
    setNumbers(lottoNumbers);
  }, [maxNumber]);

  return (
    <main className="bg-[#004587] h-screen w-full flex flex-col justify-center items-center gap-8 px-2">
      <h1 className="text-4xl text-center font-bold text-white">
        Lotto Winning Numbers Generator
      </h1>
      <div className="flex gap-2 flex-wrap lg:w-7/12 items-center justify-center ">
        {LOTTO.map((lotto) => (
          <Card
            key={lotto.name}
            name={lotto.name}
            changeNumber={() => setMaxNumber(lotto.maxNumber)}
            active={lotto.maxNumber === maxNumber}
          />
        ))}
      </div>
      <div className="flex flex-row gap-3 lg:w-7/12 items-center justify-center flex-wrap">
        {numbers.length > 0 &&
          numbers.map((number, index) => (
            <Ball
              key={number}
              number={number}
              maxNumber={maxNumber}
              delay={(index + 1) * 1000}
            />
          ))}
      </div>
    </main>
  );
}

export default App;
