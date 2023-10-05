import { chakra, Text } from '@chakra-ui/react'

export const QUESTIONS_CONTENTS = [
  {
    answer: (
      <Text>
        はい、当院は<chakra.span fontWeight={'medium'}>完全予約制</chakra.span>
        です。LINEや電話で気軽にご予約くださいね！
      </Text>
    ),
    question: '予約は必要ですか？',
  },
  {
    answer: (
      <Text>
        通常、治療時間は<chakra.span fontWeight={'medium'}>約60分</chakra.span>
        くらいを予定しています。お身体の状態に合わせて、最適なケアを提供いたしますので、ご安心くださいね！
      </Text>
    ),
    question: '治療時間はどのくらいですか？',
  },
  {
    answer: (
      <Text>
        良い質問ですね。実は当院で使用する針はとても細く、多くの方からは
        <chakra.span fontWeight={'medium'}>
          『ちょっとしたチクリ感』
        </chakra.span>
        として、時には
        <chakra.span fontWeight={'medium'}>『心地よい刺激』</chakra.span>
        として感じられることが多いんです。初めての方も、リラックスして気持ちの良い施術を体験いただけるよう、細心の注意を払っております。どうぞお楽しみに！
      </Text>
    ),
    question: '鍼治療って痛いですか？',
  },
  {
    answer: (
      <Text>
        動きやすい服装、例えば
        <chakra.span fontWeight={'medium'}>『Tシャツ、ジャージ』</chakra.span>
        がオススメです。
        <chakra.span fontWeight={'medium'}>
          『きついジーンズ、タイトスカート』
        </chakra.span>
        は動きを制限する可能性があるので、できればご遠慮くださいませ。
      </Text>
    ),
    question: 'どんな服装で行けば良いですか？',
  },
  {
    answer: (
      <Text>
        現在、当院では<chakra.span fontWeight={'medium'}>現金のみ</chakra.span>
        のお支払いとなっております。ご理解のほど、よろしくお願い申し上げます。
      </Text>
    ),
    question: '支払い方法は何がありますか？',
  },
  {
    answer: (
      <Text>
        はい、当院には駐車場を
        <chakra.span fontWeight={'medium'}>1台分</chakra.span>
        ご用意しています。もし利用される際は、事前にお知らせいただけると幸いです。
      </Text>
    ),
    question: '駐車場はありますか？',
  },
]
