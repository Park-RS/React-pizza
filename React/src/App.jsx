import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';

function App() {
    return (
        <div className="wrapper">
            <main className="pizza">
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
}

export default App;
