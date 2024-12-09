

import { routes } from './Routers/Routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>

      </RouterProvider>
      
    </div>
  );
}

export default App;
