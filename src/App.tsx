import Form from "./components/Form";
function App() {
  async function fetchData(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.status === 200) {
      const data = await response.json();
      //...
      console.log(data);
    } else {
      alert("Username not found");
    }
  }
  return (
    <div>
      <Form fetchData={fetchData} />
    </div>
  );
}

export default App;
