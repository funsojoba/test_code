import './App.css';
import LogIn from './pages/login'
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"
import { Provider } from 'react-redux'
import ProtectedRoute from "./protectedRoute"
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import getStore from './redux/store'
export const { store, persistor } = getStore()

function App() {
  return (
    <div className="App">
       <Provider store={store} >

<div className="App">
  <Router>
      <PersistGate persistor={persistor}>
        <Routes>

          <Route path='/' element={<LogIn/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          {/* <ProtectedRoute path="/dashboard" exact element={<Dashboard/>} /> */}
        </Routes>

      </PersistGate>
  </Router>

</div>
</Provider>
    </div>
  );
}

export default App;
