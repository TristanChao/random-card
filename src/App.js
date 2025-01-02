import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import './App.css';
import { ImHeart, ImClubs, ImSpades, ImDiamonds } from 'react-icons/im';
function App() {
    const vals = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = [_jsx(ImHeart, {}), _jsx(ImClubs, {}), _jsx(ImSpades, {}), _jsx(ImDiamonds, {})];
    const [val, setVal] = useState(vals[Math.round(Math.random() * 12)]);
    const [suit, setSuit] = useState(suits[Math.round(Math.random() * 3)]);
    function drawCard() {
        setVal(vals[Math.floor(Math.random() * 12)]);
        setSuit(suits[Math.floor(Math.random() * 3)]);
    }
    ;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: 'card', children: [_jsx("span", { className: 'val', children: val }), _jsx("span", { children: suit })] }), _jsx("div", { className: "button", children: _jsx("button", { onClick: drawCard, children: "draw a card" }) })] }));
}
export default App;
