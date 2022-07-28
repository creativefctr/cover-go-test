import { BrowserRouter, Navigate, Routes } from 'react-router-dom';
import { Route} from 'react-router-dom';
import Form from './pages/Form';
import Intro from './pages/Intro';
import Results from './pages/Results';
import { createRootStore, StoreProvider } from './store/StoreContext';
import './styles/style.scss';

function App() {
  const store = createRootStore();
  return (
    <StoreProvider value={store}>
      <BrowserRouter>
        <Routes>
              <Route path="/intro" element={<Intro/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/results" element={<Results/>}/>
              <Route path="/" element={<Navigate to="/intro" replace />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
