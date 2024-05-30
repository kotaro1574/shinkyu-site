import { chakra, Text } from '@chakra-ui/react'

export const TREATMENT_DETAIL_CONTENTS = [
  {
    advice: (
      <Text>
        <chakra.span color={'teal.500'} fontWeight={'medium'} mb={'3px'}>
          こんな方におすすめ
        </chakra.span>
        <br />
        遠方で次回までに時間が空く方／全身をしっかり施術したい方／定期メンテナンスをしたい方
      </Text>
    ),
    description: (
      <Text>
        繁内鍼灸治療院のスペシャルメニューです。
        <br />
        関節、神経、筋肉の正しい働きを取り戻し、揉みほぐしでは緩まない深部の筋膜の癒着や関節のねじれを時間をかけて施術することで、
        長年の痛みや疲れ、自律神経の乱れなどに効果を発揮します。
      </Text>
    ),
    imagePath: '/images/treatment-hari.jpg',
    title: '骨格、神経、筋膜整体（全身）',
  },
  {
    advice: (
      <Text>
        <chakra.span color={'teal.500'} fontWeight={'medium'} mb={'3px'}>
          こんな方におすすめ
        </chakra.span>
        <br />
        肩と腰が痛む／症状の再発を予防したい方
      </Text>
    ),
    description: (
      <Text>
        一度に複数箇所を施術したい場合や再発予防、体調管理に特化し、日々のパフォーマンスアップを目的とした施術です。複数箇所の症状を同時に改善したい方や、改善後の再発予防にも効果的です。
      </Text>
    ),
    imagePath: '/images/treatment-seitai.jpg',
    title: '複数の症状改善、再発予防特化施術（2〜3部位）',
  },
  {
    advice: (
      <Text>
        <chakra.span color={'teal.500'} fontWeight={'medium'} mb={'3px'}>
          こんな方におすすめ
        </chakra.span>
        <br />
        五十肩／腰痛／膝痛／股関節痛／顎関節症／坐骨神経痛／ヘルニア／頭痛／眼痛
      </Text>
    ),
    description: (
      <Text>
        当院が自信を持っているメニューです。積極的に症状を取り除いていく施術です。
      </Text>
    ),
    imagePath: '/images/treatment-kotsuban.jpg',
    title: '痛み、痺れ特化施術（1部位）',
  },
  {
    advice: (
      <Text>
        <chakra.span color={'teal.500'} fontWeight={'medium'} mb={'3px'}>
          オプションの種類
        </chakra.span>
        <br />
        吸い玉／オイルスライドカッピング
      </Text>
    ),
    description: (
      <Text>
        吸い玉は滞った血行を改善し、疲労回復と循環改善を促します。オイルでスライドさせることにより、血行回復に加えて浅筋膜を剥がし、皮下の体液とリンパの滞りを改善します。吸い玉の跡は約2週間程残りますが、自然に消えていくため問題ありません。
        <br />
        ※オプションをご希望の方は予約時にお伝えください。
      </Text>
    ),
    imagePath: '/images/treatment-suidama.jpg',
    title: 'オプション',
  },
]
