import {
  Box,
  Heading,
  List,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'

export const PrivacyPolicyContent = () => {
  return (
    <SectionContainer>
      <SectionHeading>プライバシーポリシー</SectionHeading>
      <Box>
        <Text mb={12}>
          繁内鍼灸治療院（以下「当院」といいます）は、当院が取得した個人情報の取扱いに関し、個人情報の保護に関する法律、個人情報保護に関するガイドライン等の指針、その他個人情報保護に関する関係法令を遵守します。
        </Text>
        <List>
          <ListItem mb={12}>
            <Heading mb={4}>取得する情報およびその取得方法、利用目的</Heading>
            <Text mb={2}>
              当院が取得するユーザー情報は、取得方法に応じて以下のとおりとなります。
            </Text>
            <OrderedList>
              <ListItem>
                ユーザーから直接取得する情報と取得方法
                <br />
                当院は、当院が提供するインターネットサイト（以下「本サイト」といいます）の運営に必要な範囲で、本サイトの利用者（以下「ユーザー」といいます）から、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人時期別情報）（以下「個人情報」といいます）を取得することがあります。
              </ListItem>
              <ListItem>
                情報の利用目的
                <br />
                当院は、取得した個人情報を以下に定める目的のために使用します。
                ※ここでは、商品・サービスの提供、利用料金の請求、ユーザーの本人確認など、個人情報の利用目的を記載します。
                ※利用目的の変更についても、予め規定に入れておいた方が良いでしょう。
              </ListItem>
              <ListItem>
                ユーザーが本サイトを利用する際に自動的に取得する情報
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>個人情報の管理</Heading>
            <Text mb={2}>
              当院は、ユーザーから取得した個人情報の管理について、以下を徹底します。
            </Text>
            <OrderedList>
              <ListItem>
                情報の正確性の確保
                <br />
                取得した個人情報については、常に正確かつ最新の情報となるよう努めます。
              </ListItem>
              <ListItem>
                安全管理措置
                <br />
                当院は、組織的な個人情報の管理については、社内規定による厳重な取扱方法を規定し、規定に基づいた取扱いと厳格な運用を徹底しています。
              </ListItem>
              <ListItem>
                個人情報管理の委託先の監督
                <br />
                個人情報の管理を外部委託する場合には、当院の規程に基づく委託先にのみ委託し適切に管理します。
              </ListItem>
              <ListItem>
                個人情報の保存期間と廃棄
                <br />
                取得した個人情報は、保存期間を設定し、保存期間終了後は廃棄します。
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>個人情報の第三者への提供</Heading>
            <Text>
              当院は、取得した個人情報を、第三者に提供することはありません。また、今後、第三者提供を行う場合は、提供する情報と目的を提示し、ユーザーの同意を得た場合のみ行います。
              ※現在個人情報の第三者提供を行っていない場合も、将来の可能性に備えて記載しておきましょう。
            </Text>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>個人情報の共同利用</Heading>
            <Text>
              当院は、ユーザーの個人情報に関して、以下のとおり共同利用します。
            </Text>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>個人情報の開示・訂正・利用停止</Heading>
            <Text>
              個人情報について、開示、訂正、利用停止等のお申し出があった場合には、本人の申し出であることを確認の上、当院所定の方法に基づき対応致します。具体的な方法は、個別にご案内しますので、下記受付窓口までお問い合わせください。
            </Text>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>お問い合わせ先</Heading>
            <Text>
              本サービス、個人情報の取扱いについては、以下の窓口にご連絡ください。
              ※苦情や問合せに対応する窓口について、問合せ可能な連絡先と連絡方法を記しておきます。
            </Text>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>セキュリティ</Heading>
            <Text>
              当院は、ウェブサイト経由で、SSLによって個人情報を取得することがあります。
            </Text>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>制定日</Heading>
            <Text>制定日 2024年4月1日</Text>
          </ListItem>
        </List>
      </Box>
    </SectionContainer>
  )
}
