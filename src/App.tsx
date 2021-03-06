import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './components/auth/auth-context';
import { RequiresAuth } from './components/auth/requires-auth';
import { ThemeProvider } from './components/layout/theme-provider';
import { Login } from './pages/login';
import { DeviceGroups } from './pages/somfy/device-groups';
import { Devices } from './pages/somfy/devices';
import { Schedules } from './pages/somfy/schedules';

declare global {
  interface Window {
    _env_: { [key: string]: string };
  }
}

function App() {
  return (
    <ThemeProvider storage={localStorage}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<RequiresAuth redirectTo="/login" />}>
              <Route path="/" element={<Navigate to="/shutter/deviceGroups" />} />
              <Route path="/shutter/deviceGroups" element={<DeviceGroups />} />
              <Route path="/shutter/deviceGroup/:uid" element={<Devices />} />
              <Route path="/shutter/schedules" element={<Schedules />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
