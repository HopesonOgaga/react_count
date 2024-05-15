import { useState } from "react";
function App() {
  const date = new Date();
  //sate == sync data
  const [steps, stepCount] = useState(0);
  const [counts, newCount] = useState(0);

  //increment
  function increaseCount() {
    newCount(counts + 1);
  }
  function decreaseCount() {
    newCount(counts - 1);
  }
  function Increase() {
    stepCount(steps + 1);
  }
  function Decrease() {
    stepCount(steps - 1);
  }

  // const
  return (
    <section className=" bg-orange-100 flex flex-col gap-6 items-center  justify-center w-full h-screen ">
      <div className="flex  gap-6">
        <button
          onClick={Decrease}
          className="bg-gray-100 border-2 border-solid rounded-md shadow-md w-6 h-6 flex items-center justify-center "
        >
          -
        </button>
        <p className="text-sm font-light capitalize">step:{steps}</p>
        <button
          onClick={Increase}
          className="bg-gray-100 border-2 border-solid rounded-md shadow-md w-6 h-6 flex items-center justify-center  "
        >
          +
        </button>
      </div>
      <div className="flex  gap-6">
        <button
          onClick={decreaseCount}
          className="bg-gray-100 border-2 border-solid rounded-md shadow-md w-6 h-6 flex items-center justify-center "
        >
          -
        </button>
        <p className="text-sm font-light capitalize">count:{counts}</p>
        <button
          onClick={increaseCount}
          className="bg-gray-100 border-2 border-solid rounded-md shadow-md w-6 h-6 flex items-center justify-center  "
        >
          +
        </button>
      </div>

      <div>
        {counts > 0 ? (
          <p className="capitalize text-sm ">
            {counts === 0
              ? " today is "
              : `${counts * steps} days from today is `}{" "}
            {`${date.toDateString()}`}
          </p>
        ) : (
          <p className="capitalize text-sm ">
            {counts === 0
              ? " today is "
              : `${Math.abs(counts * steps)} days ago from today is `}{" "}
            {`${date.toDateString()}`}
          </p>
        )}
      </div>
    </section>
  );
}

export default App;
