import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}