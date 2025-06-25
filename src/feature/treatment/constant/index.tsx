import { chakra, Text } from '@chakra-ui/react'

export const TREATMENT_DETAIL_CONTENTS = [
  {
    advice: (
      <Text>
        <chakra.span color={'teal.500'} fontWeight={'medium'} mb={'3px'}>
          こんな方におすすめ
        </chakra.span>
        <br />
        慢性的な全身の不調がある方／根本的な改善を求める方／自律神経の乱れにお悩みの方／定期的なメンテナンスをお考えの方
      </Text>
    ),
    description: (
      <Text>
        当院の最上位メニューで、鍼灸・骨格矯正・整体の3つの技術を組み合わせた総合施術です。
        <br />
        深層筋膜の癒着除去から骨格バランスの調整、神経系へのアプローチまで、身体の根本から改善を図ります。
        一時的な痛みの緩和ではなく、症状の原因となる身体の歪みや機能低下を総合的に改善し、健康な身体づくりをサポートします。
      </Text>
    ),
    imagePath: '/images/treatment-hari.jpg',
    title: '鍼灸、骨格矯正、整体',
  },
  {
    advice: (
      <Text>
        <chakra.span color={'teal.500'} fontWeight={'medium'} mb={'3px'}>
          こんな方におすすめ
        </chakra.span>
        <br />
        肩こり・腰痛など特定の症状にお悩みの方／痛みの根本原因を取り除きたい方／症状の再発を防ぎたい方
      </Text>
    ),
    description: (
      <Text>
        鍼灸と骨格矯正を組み合わせ、痛みや不調の根本原因にアプローチする施術です。
        <br />
        筋肉の緊張緩和と骨格バランスの調整により、症状の改善と再発防止を図ります。
        特定の症状に集中してアプローチするため、効率的に改善を実感していただけます。
      </Text>
    ),
    imagePath: '/images/treatment-seitai.jpg',
    title: '鍼灸、骨格矯正',
  },
  // {
  //   advice: (
  //     <Text>
  //       <chakra.span color={'teal.500'} fontWeight={'medium'} mb={'3px'}>
  //         こんな方におすすめ
  //       </chakra.span>
  //       <br />
  //       五十肩／腰痛／膝痛／股関節痛／顎関節症／坐骨神経痛／ヘルニア／頭痛／眼痛
  //     </Text>
  //   ),
  //   description: (
  //     <Text>
  //       当院が自信を持っているメニューです。積極的に症状を取り除いていく施術です。
  //     </Text>
  //   ),
  //   imagePath: '/images/treatment-kotsuban.jpg',
  //   title: '痛み、痺れ特化施術（1部位）',
  // },
  // {
  //   advice: null,
  //   description: (
  //     <Text>
  //       吸い玉は滞った血行を改善し、疲労回復と循環改善を促します。オイルでスライドさせることにより、血行回復に加えて浅筋膜を剥がし、皮下の体液とリンパの滞りを改善します。吸い玉の跡は約2週間程残りますが、自然に消えていくため問題ありません。
  //       <br />
  //       ※吸い玉をご希望の方は予約時にお伝えください。
  //     </Text>
  //   ),
  //   imagePath: '/images/treatment-suidama.jpg',
  //   title: '吸い玉',
  // },
]
