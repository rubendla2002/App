import '../App.css';
import Header from './header'
import FilesView from './filesView/FilesView'



function App() {


  return (
    <div className="app">
      {
          <>
            <Header />
            <div className="app__main">
              <FilesView />
            </div>
          </>
        
            
          
      }
    </div>
    
  );
}

export default App;
