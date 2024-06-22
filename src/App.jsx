import React, { useState } from "react";
import Navbar from "./Navbar";
import NewsBoard from "./NewsBoard";

function App(){
    const [category,setCategory]=useState("general");
    const [search,setSearch]=useState("");
    return (
        <div>
            <Navbar setCategory={setCategory} category={category} search={search} setSearch={setSearch}/>
            <NewsBoard category={category} search={search}/>
        </div>
    );
}

export default App;