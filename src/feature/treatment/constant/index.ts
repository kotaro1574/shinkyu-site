import { staticPath } from '@src/lib/$path'

export const TREATMENT_DETAIL_CONTENTS = [
  {
    description:
      '鍼治療とは、全身に点在するツボを鍼で刺激して身体の不調を改善する、東洋医学のひとつです。 鍼の刺激によって筋肉をほぐしたり、血行や代謝を促したりすることで、痛みやつらい症状を改善していきます。',
    imagePath: staticPath.images.treatment.hari_5_jpg,
    subTitle: 'acupuncture',
    title: '鍼',
  },
  {
    description:
      'お灸は、一般的にモグサを皮膚の上（経絡上のツボ）に置いて燃やし、その温熱刺激によって体調を整える治療技術です。',
    imagePath: staticPath.images.treatment.okyu_1_jpg,
    subTitle: 'moxibustion',
    title: '灸',
  },
  {
    description:
      '骨格矯正とは、歪んでしまった身体のバランスを整えるために筋肉をほぐしたり、ストレッチをする施術のことを指します。',
    imagePath: staticPath.images.treatment.kyousei_2_jpg,
    subTitle: 'manipulative',
    title: '整体',
  },
  {
    description:
      '産後の骨盤矯正は、妊娠や出産によって広がったり歪んだりした骨盤を正常な位置に戻して、骨盤の底にある筋肉を鍛えることが目的です。',
    imagePath: staticPath.images.treatment.kotubann_2_jpg,
    subTitle: 'postpartum care',
    title: '産後ケア',
  },
  {
    description:
      'すい玉とは、ガラスのカップを腰や肩などに吸着させて、於血というドロドロした「血の流れの滞り」の改善を目指す療法です。',
    imagePath: staticPath.images.treatment.suidama_4_jpg,
    subTitle: 'sucking ball',
    title: 'すい玉',
  },
]
