import { AnimatePresence } from 'framer-motion'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/providers/ThemeProvider'
import i18n from './i18n'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <I18nextProvider defaultNS={'translation'} i18n={i18n}>
        <AnimatePresence mode="wait">
          <div className="font-mainFont leading-5">
            <BrowserRouter>
              <Routes>
                <Route
                  caseSensitive={false}
                  element={<About />}
                  path="/about"
                />
                <Route
                  caseSensitive={false}
                  element={<Projects />}
                  path="/projects"
                />
                <Route caseSensitive={false} element={<Home />} path="/" />
              </Routes>
            </BrowserRouter>
          </div>
        </AnimatePresence>
      </I18nextProvider>
    </ThemeProvider>
  )
}
export default App
