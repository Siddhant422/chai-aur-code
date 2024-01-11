const BtnComp = ({ setColor }) => {
  return (
    <div>
      <button
        className="outline-none px-4 py-1 rounded-full  text-white shadow-lg"
        style={{ backgroundColor: "red" }}
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        className="outline-none px-4 py-1 rounded-full  text-white shadow-lg"
        style={{ backgroundColor: "Green" }}
        onClick={() => setColor("Green")}
      >
        Green
      </button>
      <button
        className="outline-none px-4 py-1 rounded-full  text-white shadow-lg"
        style={{ backgroundColor: "Blue" }}
        onClick={() => setColor("Blue")}
      >
        Blue
      </button>
      <button
        className="outline-none px-4 py-1 rounded-full  text-black shadow-lg"
        style={{ backgroundColor: "Yellow" }}
        onClick={() => setColor("Yellow")}
      >
        Yellow
      </button>
      <button
        className="outline-none px-4 py-1 rounded-full  text-white shadow-lg"
        style={{ backgroundColor: "orange" }}
        onClick={() => setColor("Orange")}
      >
        Orange
      </button>
    </div>
  );
};

export default BtnComp;
