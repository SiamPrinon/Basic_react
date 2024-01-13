import Card from "./MyComponent/Card";

function App() {

  return (
    <>
      <h1 className="text-center text-3xl bg-red-300">Hey it is project1</h1>
      <br />
      <div className="avatar online">
        <div className="w-24 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="avatar offline">
        <div className="w-24 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

    <br />
    <br />

    <Card />

    </>
  );
}

export default App;
