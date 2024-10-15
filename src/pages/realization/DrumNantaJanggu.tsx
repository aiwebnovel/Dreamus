import Layout from '@components/layout/Layout'

import PercussionIntroduce from '@components/sections/realization/DrumNantaJanggu/PercussionIntroduce'
// import PercussionCurriculum from '@components/sections/realization/DrumNantaJanggu/PercussionCurriculum'
import PercussionAdvantage from '@components/sections/realization/DrumNantaJanggu/PercussionAdvantage'

function DrumNantaJanggu() {
  return (
    <Layout>
      <PercussionIntroduce />
      {/* <PercussionCurriculum /> */}
      <PercussionAdvantage />
    </Layout>
  )
}

export default DrumNantaJanggu
