import { chakra, Text } from '@chakra-ui/react'
import { staticPath } from '@src/lib/$path'

export const TREATMENT_DETAIL_CONTENTS = [
  {
    description: (
      <Text>
        針治療は、特別な細い針を体の特定のツボに刺すことで、深いリラクゼーションをもたらしながら、
        <chakra.span fontWeight={'medium'}>
          『 肩こり、腰痛、頭痛、ストレス関連の不調 』
        </chakra.span>
        を効果的に緩和します。
      </Text>
    ),
    imagePath: staticPath.images.treatment_hari_jpg,
    subTitle: 'acupuncture',
    title: '鍼',
  },
  {
    description: (
      <Text>
        お灸は、特別なモグサを体の特定のツボに焚き付けることで、心地良い温かさを感じながら、
        <chakra.span fontWeight={'medium'}>
          『冷え性、疲労回復、免疫力の向上、生理痛』
        </chakra.span>
        などの症状を効果的に改善します。
      </Text>
    ),
    imagePath: staticPath.images.treatment_okyu_jpg,
    subTitle: 'moxibustion',
    title: '灸',
  },
  {
    description: (
      <Text>
        整体は、身体のバランスを整えるための手技を中心とした治療法で、自然な姿勢や動きを取り戻すことを目的とし、
        <chakra.span fontWeight={'medium'}>
          『関節の痛み、筋肉のこりや緊張、身体の歪み』
        </chakra.span>
        などの不調を効果的に緩和します。
      </Text>
    ),
    imagePath: staticPath.images.treatment_seitai_jpg,
    subTitle: 'manipulative',
    title: '整体',
  },
  {
    description: (
      <Text>
        産後ケアは、出産後の身体や心の変化に対応し、母たちの健康と快適さをサポートする治療法です。特に
        <chakra.span fontWeight={'medium'}>
          『骨盤の歪み、産後の腰痛、体型のリカバリー』
        </chakra.span>
        など、出産後に多くの女性が経験する症状や悩みを効果的にケアします。
      </Text>
    ),
    imagePath: staticPath.images.treatment_kotsuban_jpg,
    subTitle: 'postpartum care',
    title: '産後ケア',
  },
  {
    description: (
      <Text>
        吸い玉は、特別なカップを使用して皮膚を吸引する伝統的な治療法です。この吸引により、血行促進や筋肉のリラクゼーションを促し、
        <chakra.span fontWeight={'medium'}>
          『疲労回復、筋肉のこりや緊張、冷え性』
        </chakra.span>
        などの症状を効果的に緩和します。
      </Text>
    ),
    imagePath: staticPath.images.treatment_suidama_jpg,
    subTitle: 'sucking ball',
    title: 'すい玉',
  },
]
