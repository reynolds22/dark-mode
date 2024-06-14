import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function ChangeMode(){

    const [theme, setTheme] = useLocalStorage("theme", "dark");

    function handleColorChange(){
        setTheme(theme === "light" ? "dark" : "light")
    };

    return (
        <div className="change-mode" data-theme={theme}>
            <div className="container">
                <p>Change The Color!</p>
                <button onClick={handleColorChange}>Change Theme</button>
            </div>
        </div>
    );
};
