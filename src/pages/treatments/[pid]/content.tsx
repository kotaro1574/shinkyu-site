import { Box } from '@chakra-ui/react'
import { ContentItem } from '@src/components/ui/Content/ContentItem'
import { Title } from '@src/components/ui/Heading/Title'
import { staticPath } from '@src/lib/$path'

const ACUPUNCTURE_AND_MOXIBUSTION_CONTENTS = [
  {
    content:
      '鍼治療とは、全身に点在するツボ（経穴）を鍼で刺激して身体の不調を改善する、東洋医学のひとつです。 鍼の刺激によって筋肉をほぐしたり、血行や代謝を促したりすることで、痛みやつらい症状を改善していきます。',
    image:
      staticPath.images.Treatment.Detail.AcupunctureAndMoxibustion
        .Acupuncture_jpeg,
    title: '鍼治療',
  },
  {
    content:
      'お灸は、一般的にモグサ（艾）を皮膚の上（経絡上のツボ）に置いて燃やし、その温熱刺激によって体調を整える治療技術です。',
    image:
      staticPath.images.Treatment.Detail.AcupunctureAndMoxibustion
        .Moxibustion_jpeg,
    title: '灸治療',
  },
  {
    content:
      '背中や腰、肩など、体に刺した鍼に電気を流し、筋肉に刺激を与える施術です。',
    image:
      staticPath.images.Treatment.Detail.AcupunctureAndMoxibustion
        .ElectricAcupuncture_jpeg,
    title: '電気鍼（パルス）',
  },
  {
    content:
      '箱灸は木の箱にステンレス製の網が入っており、その網の上でもぐさを燃焼させます。主に背中・腰・お腹に使用し、腰痛や背中・肩のコリ、お腹の冷え、胃腸の不調などの改善が期待されます。',
    image:
      staticPath.images.Treatment.Detail.AcupunctureAndMoxibustion
        .BoxMoxibustion_jpeg,
    title: '箱灸',
  },
]

export const TreatmentContent = () => {
  return (
    <Box p={8} pt={6}>
      <Title>鍼灸</Title>
      {ACUPUNCTURE_AND_MOXIBUSTION_CONTENTS.map((item, index) => (
        <ContentItem {...item} key={`${item.title}_${index}`} mt={10} />
      ))}
    </Box>
  )
}
