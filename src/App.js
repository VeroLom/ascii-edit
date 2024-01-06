import './App.css';
import DrawingTable from "./components/DrawingTable";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>ASCII Editor</h1>
            </header>

            <main>

                <aside>
                    [colors]
                </aside>

                <section>
                    <DrawingTable />
                </section>
            </main>
        </div>
    );
}

export default App;
