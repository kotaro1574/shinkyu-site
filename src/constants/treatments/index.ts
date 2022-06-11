import { staticPath } from '@src/lib/$path'

const ACUPUNCTURE_AND_MOXIBUSTION_CONTENTS = [
  {
    content:
      '鍼治療とは、全身に点在するツボ（経穴）を鍼で刺激して身体の不調を改善する、東洋医学のひとつです。 鍼の刺激によって筋肉をほぐしたり、血行や代謝を促したりすることで、痛みやつらい症状を改善していきます。',
    image: staticPath.natsumi.treatmentpage.acupuncture_jpg,
    title: '鍼治療',
  },
  {
    content:
      'お灸は、一般的にモグサ（艾）を皮膚の上（経絡上のツボ）に置いて燃やし、その温熱刺激によって体調を整える治療技術です。',
    image: staticPath.natsumi.treatmentpage.moxibustion_jpg,
    title: '灸治療',
  },
  {
    content:
      '背中や腰、肩など、体に刺した鍼に電気を流し、筋肉に刺激を与える施術です。',
    image: staticPath.natsumi.treatmentpage.ElectricAcupuncture_jpg,
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

const MANIPULATIVE_TREATMENT_CONTENTS = [
  {
    content:
      '骨格矯正とは、歪んでしまった身体のバランスを整えるために筋肉をほぐしたり、ストレッチをする施術のことを指します。 私たちの身体は日常動作のくせや運動不足など、さまざまな要因によって左右のバランスが崩れてしまいます。 そのバランスが崩れた身体、つまり歪んだ骨格を整えていくのが、骨格矯正です。',
    image: staticPath.natsumi.top_treatment.pelvic_correction_jpg,
    title: '骨格矯正',
  },
  {
    content:
      '古くから行われている歴史のある療法です。薬・サプリメント・器械・道具・鍼・灸などを一切使わず、素手での施術を行います。',
    image: staticPath.natsumi.top_treatment.chiropractics_jpg,
    title: '徒手療法',
  },
]

const POSTPARTUM_PELVIC_CORRECTION_CONTENTS = [
  {
    content:
      '産後の骨盤矯正は、妊娠や出産によって広がったり歪んだりした骨盤を正常な位置に戻して、骨盤の底にある筋肉を鍛えることが目的です。 手で圧を掛けて開いた骨盤を内側へ押し戻し、左右上下へ押したり引いたりして骨盤のズレを整えます。 また、もみほぐしにより骨盤底部の筋肉を刺激して、筋力の強化を図ります。',
    image: staticPath.natsumi.top_treatment.pelvic_correction_jpg,
    title: '産後骨盤矯正',
  },
]

const CUPPING_BALL_CONTENTS = [
  {
    content:
      'すい玉（カッピング療法）とは、古くからある民間療法になり、ガラスやプラスチックのカップを腰や肩などに吸着させて、於血というドロドロした「血の流れの滞り」の改善を目指す療法になります。 カップの中を真空状態にし吸引し皮膚の表面に浮上させ改善を図っていきます。',
    image:
      staticPath.images.Treatment.TreatmentContents
        .$5AdobeStock_2653232_Preview_jpeg,
    title: '吸い玉',
  },
]

export const TREATMENT_DETAIL_CONTENTS = [
  {
    contents: ACUPUNCTURE_AND_MOXIBUSTION_CONTENTS,
    id: 'acupuncture_and_moxibustion',
    title: '鍼灸',
  },
  {
    contents: MANIPULATIVE_TREATMENT_CONTENTS,
    id: 'manipulative_treatment',
    title: '整体',
  },
  {
    contents: POSTPARTUM_PELVIC_CORRECTION_CONTENTS,
    id: 'postpartum_pelvic_correction',
    title: '産後骨ケア',
  },
  {
    contents: CUPPING_BALL_CONTENTS,
    id: 'cupping_ball',
    title: '吸い玉',
  },
]
