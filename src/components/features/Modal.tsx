import { useModal } from '@context/ModalContext'

import Close from '@assets/icon/close.svg?react'
import Fairy from '@assets/icon/fairy.svg?react'
import Check from '@assets/icon/check.svg?react'

import styles from '@components/features/Modal.module.scss'

function Modal({ type }: { type: string }) {
  const { closeModal } = useModal()

  return (
    <div className={styles.modalContent}>
      {type === 'text' ? (
        <div className={styles.modalContent__textContainer}>
          <div className={styles.modalContent__titleBox}>
            <p className={styles.modalContent__titleBox__title}>
              <Fairy className={styles.modalContent__titleBox__fairy} />
              띵동 띵동! 동화나라에 오신 걸 환영해요!
            </p>
            <Close
              onClick={closeModal}
              className={styles.modalContent__close}
            />
          </div>
          <div className={styles.modalContent__descContainer}>
            <div className={styles.modalContent__descBox}>
              <p className={styles.modalContent__descBox__desc}>
                우리 아이들의 마음근력을 키우는 비밀, 알고 싶나요? 몸의 근육을
                키우듯 마음도 단련할 수 있어요.
              </p>
              <ul className={styles.modalContent__checkList}>
                <li>
                  <p className={styles.modalContent__checkList__item}>
                    <Check className={styles.modalContent__checkList__check} />
                    1. 먼저 자신을 알아야 해요.
                  </p>
                </li>
                <li>
                  <p className={styles.modalContent__checkList__item}>
                    <Check className={styles.modalContent__checkList__check} />
                    2. 장단점을 파악하고 개선할 점을 찾아요.
                  </p>
                </li>
                <li>
                  <p className={styles.modalContent__checkList__item}>
                    <Check className={styles.modalContent__checkList__check} />
                    3. 꾸준히 노력하며 좋은 습관을 기르세요.
                  </p>
                </li>
              </ul>
              <p className={styles.modalContent__descBox__desc}>
                마법의 동화처럼, 우리 아이들의 마음도 튼튼해질 거예요! 그럼
                헬스와 띵똥을 비교해 볼까요?
              </p>
            </div>
            <div className={styles.modalContent__tableContainer}>
              <table className={styles.modalContent__table}>
                <thead>
                  <tr>
                    <td>헬스</td>
                    <td>띵똥 마음근력 만들기</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. 내 몸 분석</td>
                    <td>아이의 마음 근력 분석</td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        2. 유산소 : 자전거 타기, 러닝머신, 무산소 : 덤벨, 머신
                        웨이트
                      </span>
                    </td>
                    <td className={styles.modalContent__table__flex}>
                      <span>긍정력을 위한 4가지 동화형식</span>
                      <span>1. 내가 주인공 동화 (아이의 얼굴이 주인공)</span>
                      <span>
                        2. 나는 감독님 동화 (아이의 캐릭터의 악기 선정)
                      </span>
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
                    <td className={styles.modalContent__table__flex}>
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
        </div>
      ) : (
        <div>비디오</div>
      )}
    </div>
  )
}

export default Modal
