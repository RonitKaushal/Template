import { LoginForm } from "@/components/demo/LoginForm"
import { RegisForm } from "@/components/demo/RegisForm"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BreadcrumbDemo } from "./components/demo/BreadcrumbDemo"
import { Home } from "./components/demo/Home"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
      <BreadcrumbDemo/>
        <Routes>
          <Route path="login" element={<LoginForm></LoginForm>} />
          <Route path="register" element={<RegisForm></RegisForm>} />
          <Route path="/home" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    <ModeToggle></ModeToggle>
    </ThemeProvider>
  )
}
export default App;