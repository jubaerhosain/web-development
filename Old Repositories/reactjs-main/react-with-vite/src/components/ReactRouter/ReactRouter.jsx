import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Hello from "./Hello";
import Post from "./Post";
import Posts from "./Posts";

export default function ReactRouter() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/hello" />} />
        <Route path="/hello/*" element={<Hello />}>
          <Route path="world" element={<p>This is world!</p>} />
        </Route>
        <Route path="/posts/" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </div>
  );
}