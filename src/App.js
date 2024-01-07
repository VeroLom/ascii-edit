import './App.css';
import DrawingTable from "./components/DrawingTable";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>ASCII Editor</h1>
                <Menu />
            </header>

            <main>

                <Sidebar />

                <section>
                    <DrawingTable />
                </section>
            </main>
        </div>
    );
}

export default App;
