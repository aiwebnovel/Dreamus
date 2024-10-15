import { MenuItem } from '@models/menu'

import nori from '@assets/image/nori.png'
// import nanta from '@assets/image/nanta.png'
import drum from '@assets/image/drum.png'
import singsingq from '@assets/image/singsingq.png'
import pianoLogo from '@assets/image/pianoLogo.png'
import thingdongLogo from '@assets/image/thingdongLogo.png'
import dreamusLogo from '@assets/image/dreamusLogo.png'

const menuItems: MenuItem[] = [
  {
    title: '드림어스',
    subItems: [
      {
        title: 'Dreamus 소개',
        link: '/dreamus/introduction',
        // icon: Introduce,
        description: 'Dreamus 유아 음악교육 프로그램에 대해 소개합니다.',
        logo: dreamusLogo,
      },
      {
        title: 'CEO 인사',
        link: '/dreamus/ceomessage',
        // icon: Ceo,
        description: 'Dreamus CEO 인사드립니다',
        logo: dreamusLogo,
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
        // icon: Music,
        description: '씽씽큐 뮤직 프로그램에 대한 설명입니다.',
        logo: singsingq,
      },
      {
        title: '쿵! 치! 타! 드럼,난타,장구',
        link: '/realization/drum-nanta-janggu',
        // icon: Drum,
        description: '쿵! 치! 타! 드럼, 난타, 장구에 대한 설명입니다.',
        logo: drum,
      },
      {
        title: '룰루랄라 피아노',
        link: '/realization/lululala-piano',
        // icon: Piano,
        description: '룰루랄라 피아노에 대한 설명입니다.',
        logo: pianoLogo,
      },
      {
        title: '생각놀이터 띵동',
        link: '/',
        // icon: Thinking,
        description: '생각놀이터 띵동 프로그램에 대한 설명입니다.',
        logo: thingdongLogo,
      },
      {
        title: '꿈노리 별노리',
        link: '/realization/dreamStar',
        // icon: nori,
        description: '꿈노리 별노리에 대한 설명입니다.',
        logo: nori,
      },
    ],
  },
  { title: '함께일해요', link: '/work-together' },
  { title: '듣.보.드', link: '/dreamus-gallery' },
  { title: '수업신청', link: '/class-registration' },
]

export default menuItems
