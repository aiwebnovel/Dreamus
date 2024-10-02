import Layout from '@components/layout/Layout'

import MomfanyWhy from '@components/sections/realization/MomfanyMusic/MomfanyWhy'
import MomfanyVideo from '@components/sections/realization/MomfanyMusic/MomfanyVideo'
import MomfanyProcess from '@components/sections/realization/MomfanyMusic/MomfanyProcess'
import MomfanyQuestion from '@components/sections/realization/MomfanyMusic/MomfanyQuestion'

function MomfanyMusic() {
  return (
    <Layout>
      <MomfanyVideo />
      <MomfanyWhy />
      <MomfanyProcess />
      <MomfanyQuestion />
    </Layout>
  )
}

export default MomfanyMusic
