import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Home } from './pages/Home'

export function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    )
}

