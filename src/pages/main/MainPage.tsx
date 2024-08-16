import Layout from '@/components/layout/Layout'

import Tinking from '@assets/icon/think.svg?react'

import springin from '@assets/image/springIn.png'
import springOut from '@assets/image/springOut.png'

function MainPage() {
  return (
    <Layout>
      <section>
        <div>
          <div>
            <div>
              <h4>커다란 용수철을 만난경우,</h4>
              <div>
                <div>
                  <img src={springin} />
                </div>
                <div>
                  <img src={springOut} />
                </div>
              </div>
            </div>
            <div>
              <p>우리아이는 어떤 선택을 하기 바라시나요?</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h3>
              회복탄력성을 기르는 긍정창의 놀이 - 띵동 <Tinking />{' '}
            </h3>
            <p>지금 내 아이의 회복탄력성을 분석해보세요.</p>
            <div>
              <button>무료 회복탄력성 분석 검사 바로가기</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default MainPage
