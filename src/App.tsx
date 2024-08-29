import { Route, Routes } from 'react-router-dom'

import MainPage from '@pages/main/MainPage'

import Introduction from '@pages/dreamus/Introduction'
import CeoMessage from '@pages/dreamus/CeoMessage'

import Bi from '@pages/bi/Bi'

import SingsingqMusic from '@pages/realization/SingsingqMusic'
import DrumNantaJanggu from '@pages/realization/DrumNantaJanggu'
import LululalaPiano from '@pages/realization/LululalaPiano'
import MomfanyMusic from '@pages/realization/MomfanyMusic'

import WorkTogether from '@pages/work-together/WorkTogether'

import ClassRegistration from '@pages/class-registration/ClassRegistration'

import ErrorPage from '@pages/error/ErrorPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/dreamus/introduction" element={<Introduction />} />
        <Route path="/dreamus/ceomessage" element={<CeoMessage />} />

        <Route path="/dreamus/bi" element={<Bi />} />

        <Route
          path="/realization/singsingq-music"
          element={<SingsingqMusic />}
        />
        <Route
          path="/realization/drum-nanta-janggu"
          element={<DrumNantaJanggu />}
        />
        <Route path="/realization/lululala-piano" element={<LululalaPiano />} />
        <Route
          path="/realization/think-playground-dingdong"
          element={<MainPage />}
        />
        <Route path="/realization/momfany-music" element={<MomfanyMusic />} />

        <Route path="/work-together" element={<WorkTogether />} />

        <Route path="/class-registration" element={<ClassRegistration />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
