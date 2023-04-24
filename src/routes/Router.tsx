import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from '../pages/homePage'
import LoginPage from '../pages/loginPage'
import ProfilePage from '../pages/profilePage'
import RegisterPage from '../pages/registerPage'
import SettingPage from '../pages/settingPage'
import DiaryPage from '../pages/diaryPage'
import DiaryCreatePage from '../pages/diaryCreatePage'
import Layout from '../components/common/layout'
import ShowDiary from '../pages/showDiaryPage'
// import CalendarPage from '../pages/calendarPage'
import ProtectedRouter from './ProtectedRouter'
import UserdataRouter from './UserdataRouter'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          {/* <Route path="/calendar/:id" element={<CalendarPage />} /> */}
          <Route element={<UserdataRouter />}>
            <Route element={<ProtectedRouter />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/setting" element={<SettingPage />} />
              <Route path="/diary" element={<DiaryPage />} />
              <Route path="/diaryCreate" element={<DiaryCreatePage />} />
              <Route path="/diaryCreate/:id" element={<DiaryCreatePage />} />
              <Route path="/diary/:id" element={<ShowDiary />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
