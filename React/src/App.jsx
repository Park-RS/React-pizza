import './App.scss';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
function App() {
    return (
        <div className="wrapper">
            <Header />
            <Categories></Categories>
            <main className="pizza">
                <div className="container">
                    <h1 className="pizza__title">Все пиццы</h1>
                    <div className="pizza__inner">
                        <Card title="Мексиканская" price={550}></Card>
                        <Card title="Чизбургер-пицца" price={420}></Card>
                        <Card title="Креветки по-азиатски" price={380}></Card>
                        <Card title="Сырная" price={320}></Card>
                        <Card title="Сырный цыпленок" price={355}></Card>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
