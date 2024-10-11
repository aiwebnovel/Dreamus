import styles from '@components/sections/main/DingdongProgram.module.scss'
import programImg from '@assets/image/programImg.png'

function DingdongProgram() {
  return (
    <section className={styles.program}>
      <div className={styles.program__inner}>
        <div className={styles.program__container}>
          {/* <p className={styles.program__title}>띵동 연령별 프로그램</p>
          <div className={styles.program__grid}>
            <div className={styles.program__grid__charImage}>
              <img src={programChar1} width="100%" />
            </div>
            <div>
              <p>
                20~39개월 –열가지 생각 단계 <br />
                한가지 이야기를 다양한 시선으로로 풀어나가는 긍정창의놀이입니다.
                <br />
                회복탄력성의 튼튼한 뿌리 심기를 목표로 합니다.
              </p>
            </div>
            <div className={styles.program__grid__image}>
              <img src={program1} width="100%" />
            </div>
          </div>
          <div className={styles.program__grid}>
            <div className={styles.program__grid__charImage}>
              <img src={programChar2} width="100%" />
            </div>
            <div>
              <p>
                40~60개월- 리더의 생각 단계 <br />
                * 긍정창의놀이 뿐만 아니라 타인의 입장에서도 생각하며 놀이하는
                단계입니다. <br />* Ai시대에 반드시 필요한 소통 리더로의 성장을
                목표로 합니다.
              </p>
            </div>
            <div className={styles.program__grid__image}>
              <img src={program2} width="100%" />
            </div>
          </div> */}
          <img src={programImg} width={'100%'} />
        </div>
      </div>
    </section>
  )
}

export default DingdongProgram
