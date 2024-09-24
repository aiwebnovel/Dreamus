import { ResultDescription } from '@models/menu'

import aladdin from '@assets/character/aladdin.webp'
import alice from '@assets/character/alice.webp'
import charlieBrown from '@assets/character/charlieBrown.webp'
import cinderella from '@assets/character/cinderella.webp'
import elsa from '@assets/character/elsa.webp'
import harryPotter from '@assets/character/harryPotter.webp'
import hulk from '@assets/character/hulk.webp'
import ironMan from '@assets/character/ironMan.webp'
import jamesBond from '@assets/character/jamesBond.webp'
import joy from '@assets/character/joy.webp'
import littleRedRidingHood from '@assets/character/littleRedRidingHood.webp'
import moana from '@assets/character/moana.webp'
import peterpan from '@assets/character/peterpan.webp'
import sherlockHomes from '@assets/character/sherlockHomes.webp'
import spiderMan from '@assets/character/spiderMan.webp'
import tinkerBell from '@assets/character/tinkerBell.webp'

export type ResultType =
  | 'ESPA'
  | 'ESPa'
  | 'ESpa'
  | 'EsPa'
  | 'EsPA'
  | 'EsPa'
  | 'Espa'
  | 'esPA'
  | 'esPa'
  | 'espa'
  | 'eSPA'
  | 'eSPa'
  | 'eSpA'
  | 'espA'

export const resultDescriptions: ResultDescription = {
  ESPA: {
    title: '희망찬 탐험가 (Hopeful Explorer)',
    character: '제임스 본드',
    description:
      '이 유형의 아이는 스트레스 상황에서도 차분하게 감정을 조절하며, 문제를 해결하는 데 적극적이고, 다른 아이들과 잘 어울리며, 스스로 목표를 세우고 달성하는 능력이 뛰어납니다.',
    support: [
      '강점 강화: 다양한 문제 해결 활동과 모험적인 놀이를 제공하여 아이의 탐구심과 자기주도성을 더욱 키워줍니다.',
      '보완점: 지속적인 긍정적 강화와 지지적인 환경을 유지해주면 됩니다.',
    ],
    image: jamesBond,
  },
  ESPa: {
    title: '사회적 수호자 (Social Solver)',
    character: '해리 포터 (해리 포터)',
    description:
      '이 유형의 아이는 감정 조절과 문제 해결 능력이 뛰어나고, 사회성도 높지만, 자기주도성에서 어려움을 겪을 수 있습니다.',
    support: [
      '자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.',
      '강점 강화: 사회적 상호작용과 문제 해결 과제를 통해 성취감을 느낄 수 있도록 합니다.',
    ],
    image: harryPotter,
  },
  ESpa: {
    title: '사회적 탐구자 (Social Explorer)',
    character: '빨간 모자 소녀 (빨간모자와 늑대)',
    description:
      '이 유형의 아이는 감정 조절과 사회성은 우수하지만, 문제 해결과 자기주도성에서 어려움을 겪을 수 있습니다.',
    support: [
      '문제 해결: 문제 해결 활동과 논리적인 사고를 촉진하는 놀이를 제공합니다.',
      '자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.',
      '강점 강화: 사회적 활동에서 리더십 역할을 맡길 수 있는 기회를 줍니다.',
    ],
    image: littleRedRidingHood,
  },
  EsPa: {
    title: '차분한 문제 해결사 (Calm Solver)',
    character: '앨리스 (이상한 나라의 앨리스)',
    description:
      '이 유형의 아이는 감정 조절과 문제 해결에서 강점을 보이지만, 사회성과 자기주도성에서 어려움을 겪을 수 있습니다.',
    support: [
      '사회성: 친구들과의 상호작용을 촉진하는 활동을 제공합니다.',
      '자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.',
      '강점 강화: 문제 해결 과제를 통해 성취감을 느낄 수 있도록 합니다.',
    ],
    image: alice,
  },
  EspA: {
    title: '차분한 지도자 (Calm Leader)',
    character: '엘사 (겨울왕국)',
    description:
      '이 유형의 아이는 감정 조절과 자기주도성에서 강점을 보이지만, 문제 해결과 사회성에서 어려움을 겪을 수 있습니다.',
    support: [
      '문제 해결: 논리적 사고와 문제 해결 기술을 가르칩니다.',
      '사회성: 친구들과의 상호작용을 촉진하는 활동을 제공합니다.',
      '강점 강화: 자기주도적인 프로젝트를 통해 리더십을 키워줍니다.',
    ],
    image: elsa,
  },
  Espa: {
    title: '차분한 탐구자 (Calm Explorer)',
    character: '팅커벨 (피터 팬)',
    description:
      '이 유형의 아이는 감정 조절에서 강점을 보이지만, 사회성, 문제 해결, 자기주도성에서 어려움을 겪습니다.',
    support: [
      '문제 해결: 논리적 사고를 촉진하는 놀이와 활동을 제공합니다.',
      '사회성: 사회적 상호작용을 촉진하는 활동에 참여시킵니다.',
      '자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.',
      '강점 강화: 감정 조절 능력을 유지하면서 다른 영역에서의 지원을 강화합니다.',
    ],
    image: tinkerBell,
  },
  ESpA: {
    title: '도전적인 탐구자 (Challenging Explorer)',
    character: '모아나 (모아나)',
    description:
      '이 유형의 아이는 감정조절과 사회성, 자기주도성에서 강점을 보이지만, 문제 해결에서 어려움을 겪을 수 있습니다.',
    support: [
      '문제 해결: 문제 해결 전략을 단계적으로 가르칩니다.',
      '강점 강화: 사회적 리더십을 발휘할 수 있는 활동에 참여시킵니다.',
    ],
    image: moana,
  },
  EsPA: {
    title: '독립적인 사색가 (Independent Thinker)',
    character: '셜록 홈즈 (셜록홈즈)',
    description:
      '이 유형의 아이는 감정 조절과 문제 해결 능력은 우수하지만, 사회적 상호작용에서 어려움을 겪을 수 있습니다.',
    support: [
      '사회성: 그룹 놀이와 사회적 활동에 참여하도록 독려하고, 친구들과의 상호작용을 촉진하는 환경을 마련해줍니다.',
      '강점 강화: 아이가 혼자서도 성취감을 느낄 수 있는 창의적인 활동을 제공합니다.',
    ],
    image: sherlockHomes,
  },
  espa: {
    title: '전반적인 지원이 필요한 아이 (Child in Need of Support)',
    character: '찰리 브라운 (찰리 브라운)',
    description:
      '이 유형의 아이는 전반적으로 지원이 많이 필요합니다. 특히 감정 조절, 문제 해결, 사회적 기술, 자기주도성 모두에서 지원이 필요합니다.',
    support: [
      '감정 조절: 감정을 표현하고 관리하는 방법을 가르칩니다.',
      '문제 해결: 문제 해결 전략을 단계적으로 가르칩니다.',
      '사회성: 사회적 기술을 키우기 위한 활동에 참여시킵니다.',
      '자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.',
      '전반적인 지원: 지속적인 지지와 긍정적인 강화, 다양한 활동을 통해 전반적인 능력을 키웁니다.',
    ],
    image: charlieBrown,
  },
  eSPA: {
    title: '도전적인 해결사 (Challenging Solver)',
    character: '피터 팬 (피터 팬)',
    description:
      '이 유형의 아이는 감정 조절에 어려움을 겪을 수 있지만, 문제 해결 능력과 사회성이 뛰어나며, 자기주도적으로 행동합니다.',
    support: [
      '감정 조절: 감정을 표현할 수 있는 다양한 방법을 가르치고, 차분하게 할 수 있는 활동(예: 명상, 심호흡)을 가르칩니다.',
      '강점 강화: 문제 해결 활동에서 성공 경험을 많이 쌓을 수 있도록 도와줍니다.',
    ],
    image: peterpan,
  },
  esPA: {
    title: '독립적인 해결사 (Independent Solver)',
    character: '아이언맨',
    description:
      '이 유형의 아이는 감정 조절과 사회성에서 어려움을 겪을 수 있지만, 문제 해결과 자기주도성에서 강점을 보입니다.',
    support: [
      '감정 조절: 감정을 표현하고 관리하는 방법을 가르칩니다.',
      '사회성: 협동 놀이와 그룹 활동을 통해 사회적 기술을 키웁니다.',
      '강점 강화: 독립적인 문제 해결 활동을 통해 성취감을 느낄 수 있도록 합니다.',
    ],
    image: ironMan,
  },
  espA: {
    title: '조용한 지도자 (Quiet Leader)',
    character: '신데렐라 (신데렐라)',
    description:
      '이 유형의 아이는 전반적으로 어려움을 겪을 수 있지만, 자기주도적으로 행동하는 데 강점을 보입니다.',
    support: [
      '전반적인 지원: 전반적으로 모든 영역에서 지원이 필요하므로, 꾸준한 지지와 격려가 필요합니다.',
      '감정 조절: 감정을 표현하고 관리하는 방법을 가르칩니다.',
      '문제 해결: 문제 해결 전략을 단계적으로 가르칩니다.',
      '사회성: 사회적 기술을 키우기 위한 활동에 참여시킵니다.',
    ],
    image: cinderella,
  },
  esPa: {
    title: '내향적 해결사 (Quiet Solver)',
    character: '헐크',
    description:
      '이 유형의 아이는 문제 해결에서 강점을 보이지만, 감정 조절, 사회성, 자기주도성에서 어려움을 겪을 수 있습니다.',
    support: [
      '감정 조절: 감정을 표현하고 관리하는 방법을 가르칩니다.',
      '사회성: 친구들과의 상호작용을 촉진하는 활동을 제공합니다.',
      '자기주도성: 자기주도적으로 목표를 설정하고 성취할 수 있는 기회를 줍니다.',
      '강점 강화: 다양한 문제 해결 활동을 통해 성취감을 느낄 수 있도록 합니다.',
    ],
    image: hulk,
  },
  eSpa: {
    title: '사회적 협력자',
    character: '조이 (인사이드 아웃)',
    description:
      '이 유형의 아이는 사회성에서는 강점을 보이지만, 감정 조절, 문제 해결, 자기주도성에서 어려움을 겪을 수 있습니다.',
    support: [
      '감정 조절: 감정을 표현할 수 있는 다양한 방법을 가르치고 차분하게 할 수 있는 활동(예: 명상, 심호흡)을 가르칩니다.',
      '문제 해결: 문제 해결 전략을 단계적으로 가르칩니다.',
      '자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.',
      '강점 강화: 사회적 활동에서 상호작용을 하며 리더십을 기를 수 있도록 도와줍니다.',
    ],
    image: joy,
  },
  eSPa: {
    title: '사교적 해결사',
    character: '스파이더 맨',
    description:
      '이 유형의 아이는 사회성과 문제 해결에서 강점을 보이지만, 감정 조절과 자기주도성에서 어려움을 겪을 수 있습니다.',
    support: [
      '감정 조절: 감정을 표현하고 관리하는 방법을 가르칩니다.',
      '자기주도성: 작은 목표를 설정하고 성취할 수 있도록 도와줍니다.',
      '강점 강화: 사회적 상호작용과 문제 해결 과제를 통해 성취감을 느낄 수 있도록 합니다.',
    ],
    image: spiderMan,
  },
  eSpA: {
    title: '사교적인 도전가 (Social Challenger)',
    character: '알라딘 (알라딘)',
    description:
      '이 유형의 아이는 감정 조절과 문제 해결에서 어려움을 겪을 수 있지만, 사회성과 자기주도성에서 강점을 보입니다.',
    support: [
      '감정 조절: 감정 관리 전략을 가르치고, 감정을 표현하는 방법을 알려줍니다.',
      '문제 해결: 논리적 사고를 촉진하는 놀이와 활동을 제공합니다.',
      '강점 강화: 사회적 리더십을 발휘할 수 있는 활동에 참여시킵니다.',
    ],
    image: aladdin,
  },
}
