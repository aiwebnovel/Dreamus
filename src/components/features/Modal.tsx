import styles from '@components/features/Modal.module.scss'

function Modal({ type }: { type: string }) {
  return (
    <div className={styles.modalContent}>
      {type === 'text' ? (
        <div>
          <div>
            <p>띵동 띵동</p>
            <p>우리 아이들의 마음근력 키우는 동화나라에 잘 오셨습니다.</p>
            <p>동화로 생각하자! think in fairy tales 띵곡 in 동화, 띵동!</p>
            <p>어떤 방법으로 아이의 마음 근육을 단단하게 만들까?</p>
            <hr />
            <p>몸의 근육 만들 때는 어떻게 하는지 생각해볼까요?</p>
            <p>먼저 내 몸을 알아야 한다.</p>
            <p>
              내 몸의 장.단점을 파악 후에 어느 부분을 조절 신경 써 결정하자.
            </p>
            <p>내 몸 분석, 유산소 꾸준함, 집에서 식단 = 완벽한 몸교육</p>
            <p>마음 근육을 만들기도 똑같습니다. 헬스와 비교해볼까요?</p>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>헬스</td>
                  <td>띵똥 마음근력 만들기</td>
                </tr>
                <tr>
                  <td>1. 내 몸 분석</td>
                  <td>아이의 마음 근력 분석</td>
                </tr>
                <tr>
                  <td>
                    <span>
                      2. 유산소 : 자전거 타기, 러닝머신 무산소 : 덤벨, 머신
                      웨이트
                    </span>
                  </td>
                  <td>
                    <span>긍정력을 위한 4가지 동화형식</span>
                    <span>1. 내가 주인공 동화 (아이의 얼굴이 주인공)</span>
                    <span>2. 나는 감독님 동화 (아이의 캐릭터의 악기 선정)</span>
                    <span>3. 뮤지컬 동화 (뮤지컬 + 악기)</span>
                    <span>
                      4. 문제해결 동화 (직접 문제를 해결하며 동화 듣기)
                    </span>
                    <span>
                      5. 창의력을 위한 융, 복합 프로그램 (음악 신체 오감 미술
                      등)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>3. 꾸준함</td>
                  <td>아이들이 재미있게 할 수 있는 프로그램</td>
                </tr>
                <tr>
                  <td>4. 집에서 식단 조절</td>
                  <td>
                    <span>활동지 - 해피해피</span>
                    <span>피드백 참여 - 엄마와 티티쌤이 협력하여</span>
                    <span>선물 이루기 - (선수첩)</span>
                  </td>
                </tr>
                <tr>
                  <td>5. 결과 - 단단한 신체근력</td>
                  <td>단단한 마음 근력</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>비디오</div>
      )}
    </div>
  )
}

export default Modal
