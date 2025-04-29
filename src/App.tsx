function App() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div className="">
      <h1>Welcome to Our Note Demo</h1>
      <span>
        {day}.{month}.{year}
      </span>
    </div>
  );
}

export default App;
