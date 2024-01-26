

import './App.css'
import {
  BrowserRouter as Router,

  Route,
  Routes,
  Link,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import ScreensHome from './ScreensHome';

function App() {


  return (  <Router>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
            <div>Home</div>
            <Link to={"/dashboard"}>Dashboard Link</Link>
            </>
            
          }
       />
        <Route
          path={"/signin"}
          element={
            
            <div>Sign In</div>
            
          }
       />
        <Route
        
          element={
            <ProtectedRoute auth={true}/>
            
          }
       >
          <Route
            path={"/dashboard"}
            element={
              <ScreensHome />
              
            }
        />
       </Route>
      </Routes>
    </Router>
  )
}

export default App
