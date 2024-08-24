import Layout from '@components/layout/Layout'

import JobNotice from '@components/sections/work-together/JobNotice'

function WorkTogether() {
  return (
    <Layout>
      {/* <section>
        <div>
          <div>
            <div>
              <div>
                <Teacher />
                <h1>함께 일해요.</h1>
              </div>
              <p>{`아이를 보면 웃음이 절로 나오시나요? 가끔은 혀가 짧아지기도 하시나요?
              그렇다면 Dreamus에 합류하세요. 아이를 사랑하는 마음. 그 마음 하나라면
              당신은 이미 충분합니다. Dreamus와 함께 아이의 마음성장을 도와주세요.
              `}</p>
            </div>
            <div>
              <div>
                <img src={jobNotice} />
              </div>
              <div>
                <h2>교사 신청하기</h2>
                <div>
                  <form>
                    <div>
                      <label>
                        <p>이름</p>
                        <input />
                      </label>
                    </div>

                    <div>
                      <label>
                        <p>나이</p>
                        <input />
                      </label>
                    </div>

                    <div>
                      <label>
                        <p>연락처</p>
                        <input />
                      </label>
                    </div>

                    <div>
                      <label>
                        <p>지역</p>
                        <input />
                      </label>
                    </div>

                    <div>
                      <label>
                        <p>이력서 첨부</p>
                        <input />
                      </label>
                    </div>

                    <div>
                      <button>지원하기</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <JobNotice />
    </Layout>
  )
}

export default WorkTogether
