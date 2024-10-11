import Layout from '@components/layout/Layout'

import DingDongSpring from '@components/sections/main/DingDongSpring'
import DingDongTest from '@components/sections/main/DingDongTest'
import DingDongIntroduce from '@components/sections/main/DingDongIntroduce'
import DingdongGrid from '@components/sections/main/DingdongGrid'
import DingdongProgram from '@/components/sections/main/DingdongProgram'

function MainPage() {
  return (
    <Layout>
      <DingdongGrid />
      <DingDongIntroduce />
      <DingDongSpring />
      <DingDongTest />
      <DingdongProgram />
    </Layout>
  )
}

export default MainPage
