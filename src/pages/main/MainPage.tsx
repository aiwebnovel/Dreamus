import Layout from '@components/layout/Layout'

import DingDongSpring from '@components/sections/DingDongSpring'
import DingDongTest from '@components/sections/DingDongTest'
import DingDongIntroduce from '@components/sections/DingDongIntroduce'
import DingdongGrid from '@components/sections/DingdongGrid'

function MainPage() {
  return (
    <Layout>
      <DingDongSpring />
      <DingDongIntroduce />
      <DingdongGrid />
      <DingDongTest />
    </Layout>
  )
}

export default MainPage
