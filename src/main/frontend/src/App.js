import RetrieveSamples from './Components/RetrieveSamples';

function App(props) {
    return (
        <div className="App">
            <div className="container py-3">
                <header className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
                    <div className="container-fluid d-flex align-items-center">
                        <h1 className="d-flex align-items-center fs-4 text-white mb-0">Sample Info Demo</h1>
                    </div>
                </header>
                <main className="py-2">
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <RetrieveSamples/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
