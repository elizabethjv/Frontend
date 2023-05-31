import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Practice } from './Practice'
import { ProfHomepage } from './ProfHomepage'

// Routes the web application to different pages

const Main = () => (
    <Routes>
        <Route
            path='/home'
            element={
                <>
                    <Home />
                </>
            }
        />
        <Route
            path='/'
            element={
                <>
                    <Practice />
                </>
            }
        />
        <Route
            path='/ProfHomepage'
            element={
                <>
                    <ProfHomepage />
                </>
            }
        />
    </Routes>
)

export default Main
