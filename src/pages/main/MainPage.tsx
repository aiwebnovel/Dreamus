import Layout from '@components/layout/Layout'

import DingDongSpring from '@components/sections/main/DingDongSpring'
import DingDongTest from '@components/sections/main/DingDongTest'
import DingDongIntroduce from '@components/sections/main/DingDongIntroduce'
import DingdongGrid from '@components/sections/main/DingdongGrid'

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
