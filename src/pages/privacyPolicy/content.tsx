import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { SectionContainer } from '@src/components/ui/SectionContainer/SectionContainer'
import { SectionHeading } from '@src/components/ui/SectionHeading/SectionHeading'

export const PrivacyPolicyContent = () => {
  return (
    <SectionContainer pt={{ base: '100px', md: '160px' }}>
      <SectionHeading>プライバシーポリシー</SectionHeading>
      <Box>
        <Text mb={12}>
          繁内鍼灸治療院（以下、「当院」といいます。）は、当院の提供するサービス（以下、「本サービス」といいます。）において、利用者の皆様のプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーは、利用者が当院のサービスを利用する際に、当院がどのように個人情報を収集、利用、管理し、利用者の権利を保護するかについて説明します。
        </Text>
        <List>
          <ListItem mb={12}>
            <Heading mb={4}>収集する情報</Heading>
            <Text mb={2}>
              当院は、本サービスの提供にあたり、以下の情報を収集することがあります。
            </Text>
            <UnorderedList>
              <ListItem>氏名、年齢、性別などの個人を特定する情報</ListItem>
              <ListItem>
                連絡先情報（電話番号、電子メールアドレスなど）
              </ListItem>
              <ListItem>予約情報や治療履歴などのサービス利用情報</ListItem>
              <ListItem>
                アクセスログ、Cookie（クッキー）を通じて収集されるウェブブラウザの情報
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>Google Analyticsの使用について</Heading>
            <Text>
              当院のウェブサイトでは、サービスの利用状況を把握し、ユーザー体験を向上させるためにGoogle
              Analyticsを使用しています。Google Analyticsは、Google
              Inc.が提供するウェブ分析サービスであり、クッキー（Cookie）を使用してウェブサイトの利用情報を収集します。これには、訪問者のウェブサイト利用パターンや訪問回数などが含まれますが、個人を特定する情報は収集されません。収集された情報はGoogleによって管理され、当院のウェブサイトの利用分析に役立てられます。
            </Text>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>情報の利用目的</Heading>
            <Text mb={2}>収集した個人情報は、以下の目的で利用します。</Text>
            <UnorderedList>
              <ListItem>本サービスの提供・運営のため</ListItem>
              <ListItem>予約確認、変更、キャンセルなどの連絡のため</ListItem>
              <ListItem>
                当院からのお知らせやキャンペーン情報の提供のため
              </ListItem>
              <ListItem>サービスの改善や新しいサービスの開発のため</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>情報の共有と開示</Heading>
            <Text mb={2}>
              当院は、以下の場合を除き、収集した個人情報を第三者に共有または開示しません。
            </Text>
            <UnorderedList>
              <ListItem>法令に基づく場合</ListItem>
              <ListItem>利用者の同意がある場合</ListItem>
              <ListItem>
                外部サービス提供者がサービスの提供に必要な場合（ただし、これらの提供者にはプライバシーポリシーの遵守を義務付けます）
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>情報の保護</Heading>
            <Text>
              当院は、収集した個人情報の紛失、盗用、不正アクセス、開示、改ざん、破壊から保護するために、適切な物理的、技術的、組織的セキュリティ対策を講じます。
            </Text>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>ユーザーの権利</Heading>
            <Text mb={2}>
              利用者は、自己の個人情報に関して、以下の権利を有します。
            </Text>
            <UnorderedList>
              <ListItem>情報の確認や訂正を要求する権利</ListItem>
              <ListItem>情報の削除を要求する権利</ListItem>
              <ListItem>情報の利用停止を要求する権利</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>プライバシーポリシーの変更</Heading>
            <Text>
              当院は、必要に応じて、本プライバシーポリシーを更新することがあります。
            </Text>
          </ListItem>
          <ListItem mb={12}>
            <Heading mb={4}>お問い合わせ</Heading>
            <Text>
              本プライバシーポリシーに関するお問い合わせは、当院までご連絡ください。
            </Text>
          </ListItem>
        </List>
      </Box>
    </SectionContainer>
  )
}
