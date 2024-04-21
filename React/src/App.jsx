import './App.scss';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import pizzas from './assets/pizzas.json';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Categories></Categories>
			
            <main className="pizza">
                <div className="container">
                    <h1 className="pizza__title">Все пиццы</h1>
                    <div className="pizza__inner">
                        {pizzas.map((obj) => (
                            <Card key={obj.id} {...obj}></Card>
                        ))}

                      
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
