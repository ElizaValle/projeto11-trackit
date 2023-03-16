import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HabitTodayPage from "./pages/HabitTodayPage/HabitTodayPage";
import HistoryOfHabitsPage from "./pages/HistoryOfHabitsPage/HistoryOfHabitsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/" element={<RegistrationPage />} /> */} 
        {/* <Route path="/" element={<HabitsPage />} /> */}
        <Route path="/" element={<HabitTodayPage />} />
        {/* <Route path="/" element={<HistoryOfHabitsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


