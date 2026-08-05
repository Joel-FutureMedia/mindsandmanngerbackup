import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import { DiscoveryCallProvider } from './components/DiscoveryCallModal'

const HomePage = lazy(() => import('./pages/HomePage'))
const HospitalityPage = lazy(() => import('./pages/HospitalityPage'))
const ServiceIndustriesPage = lazy(() => import('./pages/ServiceIndustriesPage'))
const SchoolYouthPage = lazy(() => import('./pages/SchoolYouthPage'))
const ApproachPage = lazy(() => import('./pages/ApproachPage'))
const ImpactPage = lazy(() => import('./pages/ImpactPage'))
const TeamPage = lazy(() => import('./pages/TeamPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  return (
    <DiscoveryCallProvider>
      <ScrollToHash />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hospitality" element={<HospitalityPage />} />
          <Route path="/service" element={<ServiceIndustriesPage />} />
          <Route path="/school-youth" element={<SchoolYouthPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </DiscoveryCallProvider>
  )
}
