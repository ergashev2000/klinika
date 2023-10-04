import ConsultantImg1 from "~/assets/images/consultant-img1.png";
import ConsultantImg2 from "~/assets/images/consultant-img2.png";
import ConsultantImg3 from "~/assets/images/consultant-img3.png";

import DiscountImg1 from "~/assets/images/discount-img1.png";
import DiscountImg2 from "~/assets/images/discount-img2.png";
import DiscountImg3 from "~/assets/images/discount-img3.png";

import ServiceImg1 from "~/assets/images/services-img1.png";
import ServiceImg2 from "~/assets/images/services-img2.png";
import ServiceImg3 from "~/assets/images/services-img3.png";
import ServiceImg4 from "~/assets/images/services-img4.png";
import ServiceImg5 from "~/assets/images/services-img5.png";
import ServiceImg6 from "~/assets/images/services-img6.png";

import Doc1 from "~/assets/images/doc1.png";
import Doc2 from "~/assets/images/doc2.png";
import Doc3 from "~/assets/images/doc3.png";
import Doc4 from "~/assets/images/doc4.png";
import Doc5 from "~/assets/images/doc5.png";

const consultant = [
  {
    title: "Полный осмотр и диагностика полости рта",
    decription:
      "При необходимости сделаем дополнительный снимок зубов, у нас в клинике",
    img: ConsultantImg1,
  },
  {
    title: "Составит 2-3 плана лечения на выбор",
    decription: "Вы сможете выбрать подходящий план лечения, исходя из бюджета",
    img: ConsultantImg2,
  },
  {
    title: "При необходимости проведем проф. гигиену",
    decription: "Чистка зубов в 4 этапа",
    img: ConsultantImg3,
  },
];

const discount = [DiscountImg1, DiscountImg2, DiscountImg3, DiscountImg1];

const services = [
  {
    title: "Хирургия",
    description:
      "Удаление зуба является одной из самых распространенных операций в стоматологической практике.",
    usligi: ["Удаление зубов любой сложности"],
    img: ServiceImg1,
  },
  {
    title: "Терапия",
    description:
      "Лечение напрямую зависит от стадии заболевания. Мы подбираем наиболее эффективные методы диагностики и терапии.",
    usligi: [
      "Кариозных и некариозных поражений",
      "Пульпитов и периодонтитов",
      "Художественная реставрация зубов",
    ],
    img: ServiceImg2,
  },
  {
    title: "Ортопедия",
    description:
      "Помогает решить проблемы, связанные с аномалиями, приобретенными дефектами, повреждениями и деформациями органов жевательно-речевого аппарата.",
    usligi: [
      "Коронки и мосты керамические",
      "Коронки и мосты циркониевые",
      "Съёмное протезирование (протезы, бюгеля, мягкие протезы)",
      "Установка виниров",
    ],
    img: ServiceImg3,
  },
  {
    title: "Имплантация",
    description:
      "Это операция по установке в челюстную ткань специального стоматологического штифта, который будет играть роль корня.",
    usligi: [
      "Установка имплантов OSSTEM implant",
      "Наращивание кости (все виды аугментации) OSSTEM implant",
      "Имплантация зубов по системе All ON4-All ON6",
    ],
    img: ServiceImg4,
  },
  {
    title: "Ортодонтия",
    description:
      "Поможет сделать вашу улыбку красивой и исправит прикус. Исправляет аномалии челюстей, положения челюстей в черепе, формы, величины, соотношения зубных дуг.",
    usligi: [
      "Установка брекет систем",
      "Цифровое ортодонтическое лечение прозрачными каппами",
      "Полная диагностика и лечение взрослых и детей",
    ],
    img: ServiceImg5,
  },
  {
    title: "Отбеливание зубов",
    description:
      "Стоматологическая процедура изменения оттенка зубной эмали. Отбеливание зубов относится к области косметической стоматологии.",
    usligi: [" Система Opalescence Boost"],
    img: ServiceImg6,
  },
];

const doctors = [
  {
    id: 1,
    name: "Анисимов Дмитрий Владимирович",
    job: "Врач-стоматолог",
    desc: "Действующие сертификаты:стоматология общей практики; стоматология хирургическая Направленность: имплантация, пародонтология, удаление зубов любой сложности",
    exp: "Опыт работы более 5 лет",
    img: Doc1,
  },
  {
    id: 2,
    name: "Варданян Давид Араевич",
    job: "Врач-стоматолог",
    desc: "Действующие сертификаты:стоматология общей практики; стоматология хирургическая Направленность: имплантация, пародонтология, удаление зубов любой сложности",
    exp: "Опыт работы более 5 лет",
    img: Doc2,
  },
  {
    id: 3,
    name: "Соха Анастасия Юрьевна",
    job: "Врач-стоматолог",
    desc: "Действующие сертификаты:стоматология общей практики; стоматология хирургическая Направленность: имплантация, пародонтология, удаление зубов любой сложности",
    exp: "Опыт работы более 10 лет",
    img: Doc3,
  },
  {
    id: 4,
    name: "Соха Анастасия Юрьевна",
    job: "Врач-стоматолог",
    desc: "Действующие сертификаты:стоматология общей практики; стоматология хирургическая Направленность: имплантация, пародонтология, удаление зубов любой сложности",
    exp: "Опыт работы более 10 лет",
    img: Doc4,
  },
  {
    id: 5,
    name: "Синельщикова Елена Дмитриевна",
    job: "Врач-стоматолог",
    desc: "Действующие сертификаты:стоматология общей практики; стоматология хирургическая Направленность: имплантация, пародонтология, удаление зубов любой сложности",
    exp: "Опыт работы более 5 лет",
    img: Doc5,
  },
];
export { consultant, discount, services, doctors };
