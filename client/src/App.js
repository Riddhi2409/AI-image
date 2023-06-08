import React from "react";
import { Route,Routes ,Link} from "react-router-dom";

import { Home,CreatePost } from "./page";
import {logo} from './assets'

function App() {
  return (
    <>
    <div className="w-full bg-white flex justify-between items-center sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </div>
    <main className="w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    </>
  );
}

export default App;
