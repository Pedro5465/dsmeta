import Header from "./components/Header"
import Card from "./components/SalesCard"

function App() {
  return (
    <>
    <Header/>
    <main>
        <section id="sales">
            <div className="dsmeta-container">
            <Card/>
            </div>  
        </section>
    </main>        
    </>
  )
}
export default App