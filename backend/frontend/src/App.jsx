import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "@/pages/Home"
import { LogCompo } from "@/components/elements/LogCompo"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>} />
          <Route path="/log" element={<LogCompo></LogCompo>} />
        </Routes>
      </BrowserRouter>
    <ModeToggle></ModeToggle>
    </ThemeProvider>
  )
}
export default App;