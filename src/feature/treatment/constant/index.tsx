import { chakra, Text } from '@chakra-ui/react'
import { staticPath } from '@src/lib/$path'

export const TREATMENT_DETAIL_CONTENTS = [
  {
    advice:
      '遠方で次回までに時間が空く方／全身をしっかり施術したい方／定期メンテナンスをしたい方',
    description: (
      <Text>
        繁内鍼灸治療院のスペシャルメニューです。
        <br />
        関節、神経、筋肉の正しい働きを取り戻し、揉みほぐしでは緩まない深部の筋膜の癒着や関節のねじれを時間をかけて施術することで、
        <chakra.span fontWeight={'medium'}>
          長年の痛みや疲れ、自律神経の乱れなどに効果を発揮
        </chakra.span>
        します。
      </Text>
    ),
    imagePath: staticPath.images.treatment_hari_jpg,
    price: '12,000円（税込）',
    time: '90分',
    title: '骨格、神経、筋膜整体（全身）',
  },
  {
    advice: '肩と腰が痛む／症状の再発を予防したい方',
    description: (
      <Text>
        一度に複数箇所を施術したい場合や再発予防、体調管理に特化し、日々のパフォーマンスアップを目的とした施術です。複数箇所の症状を同時に改善したい方や、改善後の再発予防にも効果的です。
      </Text>
    ),
    imagePath: staticPath.images.treatment_seitai_jpg,
    price: '6,500円（税込）',
    time: '60分',
    title: '複数の症状改善、再発予防特化施術（2〜3部位）',
  },
  {
    advice:
      '五十肩／腰痛／膝痛／股関節痛／顎関節症／坐骨神経痛／ヘルニア／頭痛／眼痛',
    description: (
      <Text>
        当院が自信を持っているメニューです。積極的に症状を取り除いていく施術です。
      </Text>
    ),
    imagePath: staticPath.images.treatment_kotsuban_jpg,
    price: '5,000円（税込）',
    time: '40分',
    title: '痛み、痺れ特化施術（1部位）',
  },
  {
    advice: '',
    description: (
      <Text>
        吸い玉は滞った血行を改善し、疲労回復と循環改善を促します。オイルでスライドさせることにより、血行回復に加えて浅筋膜を剥がし、皮下の体液とリンパの滞りを改善します。吸い玉の跡は約2週間程残りますが、自然に消えていくため問題ありません。
        <br />
        ※オプションをご希望の方は予約時にお伝えください。
        <br />
        価格の詳細はこちら
      </Text>
    ),
    imagePath: staticPath.images.treatment_suidama_jpg,
    price: '',
    time: '',
    title: 'オプション',
  },
]
