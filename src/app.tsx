import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/providers/ThemeProvider'
import i18n from './i18n'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

const ParticlesBackground = lazy(() =>
  import('./components/custom/particles-background').then(mod => ({
    default: mod.ParticlesBackground,
  }))
)

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <I18nextProvider defaultNS={'translation'} i18n={i18n}>
        <AnimatePresence mode="wait">
          <div className="relative min-h-screen overflow-x-hidden leading-5">
            <div
              aria-hidden
              className="pointer-events-none fixed -top-40 -right-40 z-0 h-[36rem] w-[36rem] rounded-full bg-mainColor/25 blur-[120px] dark:bg-mainColor/20"
            />
            <div
              aria-hidden
              className="pointer-events-none fixed -bottom-40 -left-40 z-0 h-[36rem] w-[36rem] rounded-full bg-lightMainColor/20 blur-[120px] dark:bg-lightMainColor/15"
            />
            <Suspense fallback={null}>
              <ParticlesBackground />
            </Suspense>
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
                {/* <Route
                  caseSensitive={false}
                  element={<ResumePDF user={user} />}
                  path="/resume"
                /> */}
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
