import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import SplashLayout from "./features/splash/layouts/SplashLayout";
import MainLayout from "./features/main/layouts/MainLayout";
import AuthLayout from "./features/auth/layouts/AuthLayout";
import NotificationLayout from "./features/notification/layouts/NotificationLayout";

function App() {

  return (
    <>
      {/* Splash screen */}
      <SplashLayout/>
      <NotificationLayout/>
      <BrowserRouter>
        <Routes>
          
          {/* Router auth layout */}
          <Route path="/auth/*" element={<AuthLayout/>}/>

          {/* Route main layout */}
          <Route path="/*" element={<MainLayout/>}/>

          {/* Unknown path */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
