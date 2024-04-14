import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./features/Home/Home";
import Movies from "./features/Movies/Movies";
import {Provider} from "react-redux";
import state from "./store";
import Movie from "./features/Movies/Movie";
import Support from "./features/Support/Support";
import Subscriptions from "./features/Subscriptions/Subscriptions";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Provider store={state}><App/></Provider>,
        children: [
            {
                path: "/home",
                element: <Home/>,
            }, {
                path: "/movies-and-shows",
                element: <Movies/>,
                children: [{
                    path: `/movies-and-shows/:id`,
                    element: <Movie/>,
                },]
            }, {
                path: `/support`,
                element: <Support/>,
            }, {
                path: `/subscriptions`,
                element: <Subscriptions/>,
            }
        ]
    }

])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
