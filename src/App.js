import Routers from './Components/Routers';
import { withContext } from './Components/@Context'

function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default withContext(App)
