import styles from '@components/sections/dreamus/CeoGreeting.module.scss'

function CeoGreeting() {
  return (
    <section className={styles.greeting}>
      <div className={styles.greeting__inner}>
        <div>
          <h1 className={styles.greeting__title}>CEO 인사말</h1>
          <hr className={styles.greeting__line} />
          <p className={styles.greeting__speak}>
            <br />
            안녕하세요. 생각놀이터 띵동 대표 비결쌤 입니다.
            <br />
            <br />
            우리 아이가 어떤 아이로 자라났으면 하시나요?
            <br />
            상상해 보세요.
            <br />
            <br />
            내 아이가 어떤 힘든 상황에서도 씽긋 웃으며, <br />
            "별일 아냐, 다시 하면 돼." 라고 말하는 모습을요.
            <br />
            <br />
            내 아이가 좌절을 겪었을 때, <br />
            "아, 이 문제가 잘못 됐었구나. 이걸 이렇게 해결하면 되겠다." <br />
            라고 스스로 판단하고 실행에 옮기는 모습도요. <br />
            <br />
            미소가 지어지지 않으신가요? <br />
            <br />
            어떤 아이든지 그렇게 할 수 있습니다.
            <br />
            지금 그 가능성을 끌어내 주세요. 긍정창의력을 만들어주세요.
            <br />
            <br />
            국내 최초 회복탄력성을 위한 유아놀이 프로그램! <br />
            <span className={styles.greeting__quote}>생각놀이터 띵동</span>이
            힘껏 돕겠습니다.
            <br />
          </p>
        </div>
      </div>
    </section>
  )
}

export default CeoGreeting
