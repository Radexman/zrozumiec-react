import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement('a', { href: 'https://zrozumiecreact.pl' }, 'Test');

console.log(<h1>Test 2</h1>);
console.log(element);

const elementInJSC = <a href='https://zrozumiecreact.pl'>Test 3</a>;

const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

console.log(hours, minutes);

const timer = <div>{`${hours}:${minutes}`}</div>;

ReactDOM.createRoot(document.getElementById('root')).render(timer);
