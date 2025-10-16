import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
export type GitHubData = {
  name: string;
  avatar_url: string;
  login: string;
  public_repos: number;
  created_at: string;
  location: string;
  bio: string;
  html_url: string;
  blog: string;
};

function App() {
  const [data, setData] = useState<GithubData>();

  async function fetchData(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.status === 200) {
      const data = await response.json();
      setData(data);
      console.log(data);
    } else {
      alert("Username not found");
    }
  }
  return (
    <div>
      <Form fetchData={fetchData} />
      {data && <Card data={data} />}
    </div>
  );
}

export default App;
