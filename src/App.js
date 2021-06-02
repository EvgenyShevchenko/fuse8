import React, {useState} from "react";
import {Route} from "react-router-dom";
import './scss/app.scss';
import Search from "./components/Search";
import Content from "./components/Content";
import SeeButton from "./components/SeeButton";


function App() {
    const [term, setTerm] = useState("")

    const onSearchChange = (e) => {
        setTerm(e.target.value)
    }


    return (
        <div className="wrapper">
            <h1 className="title">
                Our Latest Developments
            </h1>
            <Search onSearchChange={onSearchChange}/>
            <Content term={term}/>
            <SeeButton/>
        </div>
    );
}

export default App;
