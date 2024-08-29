import { MenuItem } from '@models/menu'

import Introduce from '@assets/icon/introduce.svg?react'
import Ceo from '@assets/icon/ceo.svg?react'
import Thinking from '@assets/icon/think.svg?react'
import Piano from '@assets/icon/piano.svg?react'
import Mom from '@assets/icon/mom.svg?react'
import Drum from '@assets/icon/drum.svg?react'
import Music from '@assets/icon/music.svg?react'

const menuItems: MenuItem[] = [
  {
    title: '드림어스',
    subItems: [
      {
        title: 'Dreamus 소개',
        link: '/dreamus/introduction',
        icon: Introduce,
        description: 'Dreamus 유아 음악교육 프로그램에 대해 소개합니다.',
      },
      {
        title: 'CEO 인사',
        link: '/dreamus/ceomessage',
        icon: Ceo,
        description: 'Dreamus CEO 인사드립니다',
      },
    ],
  },
  { title: 'BI', link: '/dreamus/bi' },
  {
    title: '꿈의실현',
    subItems: [
      {
        title: '씽씽큐 뮤직',
        link: '/realization/singsingq-music',
        icon: Music,
        description: '씽씽큐 뮤직 프로그램에 대한 설명입니다.',
      },
      {
        title: '쿵! 치! 타! 드럼,난타,장구',
        link: '/realization/drum-nanta-janggu',
        icon: Drum,
        description: '쿵! 치! 타! 드럼, 난타, 장구에 대한 설명입니다.',
      },
      {
        title: '룰루랄라 피아노',
        link: '/realization/lululala-piano',
        icon: Piano,
        description: '룰루랄라 피아노에 대한 설명입니다.',
      },
      {
        title: '생각놀이터 띵동',
        link: '/',
        icon: Thinking,
        description: '생각놀이터 띵동 프로그램에 대한 설명입니다.',
      },
      {
        title: '맘펴니 뮤직',
        link: '/realization/momfany-music',
        icon: Mom,
        description: '맘펴니 뮤직에 대한 설명입니다.',
      },
    ],
  },
  { title: '함께일해요', link: '/work-together' },
  { title: '듣.보.드', link: '/dreamus-gallery' },
  { title: '수업신청', link: '/class-registration' },
]

export default menuItems
