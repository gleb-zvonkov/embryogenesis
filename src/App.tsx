import "./App.css";

import { useEffect, useState } from "react";
import { useRef } from "react";

import DaySection from "./components/DaySection";
import WeekSection from "./components/WeekSection";
import Term from "./components/Term";

import introImg from "./assets/images/intro.png";
import day0 from "./assets/images/day0.png";
import day1 from "./assets/images/day1.png";
import day2 from "./assets/images/day2.png";
import day3 from "./assets/images/day3.png";
import day4 from "./assets/images/day4.png";
import day5 from "./assets/images/day5.png";
import day6 from "./assets/images/day6.png";
import day7 from "./assets/images/day7.png";
import day8 from "./assets/images/day8.png";
import day9 from "./assets/images/day9.png";
import day10 from "./assets/images/day10.png";
import day11 from "./assets/images/day11.png";
import day12 from "./assets/images/day12.png";
import day13 from "./assets/images/day13.png";
import day14 from "./assets/images/day14.png";
import day15 from "./assets/images/day15.png";
import day16 from "./assets/images/day16.png";
import day17 from "./assets/images/day17.png";
import day18 from "./assets/images/day18.png";
import day19 from "./assets/images/day19.png";
import day20 from "./assets/images/day20.png";
import day21 from "./assets/images/day21.png";
import day22 from "./assets/images/day22.png";
import day23 from "./assets/images/day23.png";
import day24 from "./assets/images/day24.png";
import day25 from "./assets/images/day25.png";
import day26 from "./assets/images/day26.png";
import day27 from "./assets/images/day27.png";
import day28 from "./assets/images/day28.png";
import week5 from "./assets/images/week5.png";
import week6 from "./assets/images/week6.png";
import week7 from "./assets/images/week7.png";
import week8 from "./assets/images/week8.png";
import conclusion from "./assets/images/conclusion.png";




function App() {

  const [activeDay, setActiveDay] = useState(0);
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const [tooltip, setTooltip] = useState({
    text: "",
    x: 0,
    y: 0,
    visible: false,
  });

  useEffect(() => {
    if (!tooltip.visible || !tooltipRef.current) return;

    const rect = tooltipRef.current.getBoundingClientRect();

    let newX = tooltip.x;
    const padding = 16;

    // 👇 left overflow
    if (rect.left < padding) {
      newX += padding - rect.left;
    }

    // 👇 right overflow
    if (rect.right > window.innerWidth - padding) {
      newX -= rect.right - (window.innerWidth - padding);
    }

    // only update if needed
    if (newX !== tooltip.x) {
      setTooltip((t) => ({ ...t, x: newX }));
    }
  }, [tooltip.visible, tooltip.text]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          // 👇 track intro visibility
          if (el.id === "intro") {
            setIsIntroVisible(entry.isIntersecting);
          }

          // 👇 keep your existing logic
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(el);
            setActiveDay(Math.max(0, index - 1));
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);




  return (
    <div>
      {/* <h1 style={{ position: "fixed", top: 0, left: 0 }}>{activeDay}</h1> */}

      {/* INTRO */}
      <section
        style={{
          height: "100vh",
          textAlign: "center",
          scrollSnapAlign: "start",
          padding: "20px 40px",
          overflowY: "auto",
        }}
        id="intro"
      >
        <h1>Embryogenesis</h1>

        <p className="introText">
          Embryogenesis is the process of forming and developing the embryo.
        </p>

        <p className="introText">
          It occurs from fertilization to the end of week 8.
        </p>

        <p className="introText">
          It includes the most critical period of development, organogenesis.
        </p>

        <img src={introImg} style={{ width: "100%", maxWidth: "1100px" }} />

        <p
          style={{
            color: "gray",
            fontSize: "20px",
            marginTop: "30px",
          }}
        >
          This site may contain mistakes. Consult primary literature and
          textbooks.
        </p>

        <div className="scrollHint">↓</div>
      </section>

      {/* DAY 0 */}
      <DaySection
        title="Day 0: Ovulation"
        image={day0}
        text={[
          <>
            Ovulation occurs, releasing the{" "}
            <Term
              definition="An immature egg cell that is released from the ovary during ovulation."
              setTooltip={setTooltip}
            >
              secondary oocyte
            </Term>{" "}
            from the ovary into the uterine tube.
          </>,
          <>
            The oocyte is arrested in{" "}
            <Term
              definition="The stage where the secondary oocyte is paused, waiting for fertilization."
              setTooltip={setTooltip}
            >
              metaphase II of meiosis
            </Term>
            .
          </>,
          <>
            The oocyte is surrounded by the{" "}
            <Term
              definition="A layer of granulosa cells that surrounds the secondary oocyte. It protects and nourishes the oocyte and is the outer layer."
              setTooltip={setTooltip}
            >
              corona radiata
            </Term>{" "}
            and{" "}
            <Term
              definition="A thick glycoprotein layer beneath the corona radiata that surrounds the secondary oocyte."
              setTooltip={setTooltip}
            >
              zona pellucida
            </Term>
            .
          </>,
          <>
            Sperm deposited in the vagina travels up the cervix, uterus, and
            uterine tube.
          </>,
        ]}
      />

      <DaySection
        title="Day 1: Fertilization"
        image={day1}
        text={[
          <>
            A sperm fertilizes the{" "}
            <Term
              definition="An immature egg cell that is released from the ovary during ovulation."
              setTooltip={setTooltip}
            >
              secondary oocyte
            </Term>{" "}
            in the ampulla of the uterine tube.
          </>,
          <>
            The sperm penetrates the{" "}
            <Term
              definition="A layer of granulosa cells that surrounds the secondary oocyte. It protects and nourishes the oocyte and is the outer layer."
              setTooltip={setTooltip}
            >
              corona radiata
            </Term>
            .
          </>,
          <>
            The sperm undergoes the{" "}
            <Term
              definition="A process where the sperm releases enzymes from its acrosome (a cap on its head) to break through the corona radiata and zona pellucida."
              setTooltip={setTooltip}
            >
              acrosome reaction
            </Term>{" "}
            and penetrates the{" "}
            <Term
              definition="A thick glycoprotein layer beneath the corona radiata that surrounds the secondary oocyte."
              setTooltip={setTooltip}
            >
              zona pellucida
            </Term>
            .
          </>,
          <>The sperm fuses with the oocyte membrane.</>,
          <>
            A{" "}
            <Term
              definition="A process where the oocyte releases substances that change the zona pellucida to block other sperm from entering."
              setTooltip={setTooltip}
            >
              cortical reaction
            </Term>{" "}
            prevents{" "}
            <Term
              definition="The fertilization of an egg by more than one sperm."
              setTooltip={setTooltip}
            >
              polyspermy
            </Term>
            .
          </>,
          <>
            The oocyte completes{" "}
            <Term
              definition="Where sister chromatids separate, resulting in cells with half the number of chromosomes."
              setTooltip={setTooltip}
            >
              meiosis II
            </Term>
            .
          </>,
          <>
            Male and female{" "}
            <Term
              definition="Male and female nuclei inside the fertilized egg, each containing 23 chromosomes."
              setTooltip={setTooltip}
            >
              haploid pronuclei
            </Term>{" "}
            form.
          </>,
          <>
            The pronuclei fuse to form a{" "}
            <Term
              definition="A fertilized egg cell that contains 46 chromosomes."
              setTooltip={setTooltip}
            >
              diploid zygote
            </Term>
            .
          </>,
        ]}
      />

      <DaySection
        title="Day 2: Cleavage"
        image={day2}
        text={[
          <>
            The zygote divides by{" "}
            <Term
              definition="A series of rapid cell divisions where the zygote divides into smaller cells without increasing in overall size."
              setTooltip={setTooltip}
            >
              cleavage
            </Term>
            , a series of rapid mitotic divisions.
          </>,
          <>Cleavage forms 2-cell stage and then 4-cell stage.</>,
          <>
            The individual cells in the embryo are called{" "}
            <Term
              definition="The individual cells produced when the zygote divides during cleavage."
              setTooltip={setTooltip}
            >
              blastomeres
            </Term>
            .
          </>,
          <>The embryo travels from the uterine tube to the uterus.</>,
        ]}
      />

      <DaySection
        title="Day 3: Compaction"
        image={day3}
        text={[
          <>The embryo reaches the 8-cell stage.</>,
          <>
            Blastomeres undergo{" "}
            <Term
              definition="A process in which blastomeres tightly adhere to each other."
              setTooltip={setTooltip}
            >
              compaction
            </Term>
            .
          </>,
          <>
            Outer cells become flattened and{" "}
            <Term
              definition="Cells that have a defined outer and inner side, helping determine their future role."
              setTooltip={setTooltip}
            >
              polarized
            </Term>
            .
          </>,
          <>Inner cells remain rounded and non-polar.</>,
        ]}
      />

      <>
        <DaySection
          title="Day 4: Morula"
          image={day4}
          text={[
            <>The embryo reaches the 16-cell stage, called the morula.</>,
            <>
              The outer cell mass is called the{" "}
              <Term
                definition="Outer cell layer of the early embryo that helps with implantation and contributes to formation of the placenta."
                setTooltip={setTooltip}
              >
                trophoblast
              </Term>
              .
            </>,
            <>
              The inner cell mass is called the{" "}
              <Term
                definition="Inner group of cells in the early embryo that will develop into the embryo itself."
                setTooltip={setTooltip}
              >
                embryoblast
              </Term>
              .
            </>,
            <>The morula enters the uterine cavity.</>,
          ]}
        />
      </>

      <DaySection
        title="Day 5: Blastocyst"
        image={day5}
        text={[
          <>
            Fluid enters the morula which forms the{" "}
            <Term
              definition="A fluid-filled space that forms inside the early embryo."
              setTooltip={setTooltip}
            >
              blastocyst cavity
            </Term>
            .
          </>,
          <>
            The fluid displaces the embryoblast to the{" "}
            <Term
              definition="The region of the early embryo where the embryoblast is located."
              setTooltip={setTooltip}
            >
              embryonic pole
            </Term>
            .
          </>,
          <>
            The expanding blastocyts rupture{" "}
            <Term
              definition="A protective glycoprotein layer surrounding the early embryo."
              setTooltip={setTooltip}
            >
              zona pellucida
            </Term>{" "}
            and squeezes out.
          </>,
        ]}
      />

      <DaySection
        title="Day 6: Implantation"
        image={day6}
        text={[
          <>
            The blastocyst attaches to{" "}
            <Term
              definition="The inner lining of the uterus where the embryo implants and begins to develop."
              setTooltip={setTooltip}
            >
              endometrium
            </Term>
            .
          </>,
          <>
            It does so at the{" "}
            <Term
              definition="The region of the early embryo where the embryoblast is located."
              setTooltip={setTooltip}
            >
              embryonic pole
            </Term>
            .
          </>,
          <>Implantation usually occurs on the upper posterior uterine wall.</>,
        ]}
      />

      <DaySection
        title="Day 7: Trophoblast Differentiation"
        image={day7}
        text={[
          <>
            Trophoblast differentiates into cytotrophoblast and
            syncytiotrophoblast.
          </>,
          <>
            The{" "}
            <Term
              definition="The inner layer of the trophoblast made of individual cells that divide and give rise to other trophoblast cells."
              setTooltip={setTooltip}
            >
              cytotrophoblast
            </Term>{" "}
            surrounds the blastocyst.
          </>,
          <>
            The{" "}
            <Term
              definition="The outer layer of the trophoblast that invades the endometrium and helps the embryo implant."
              setTooltip={setTooltip}
            >
              syncytiotrophoblast
            </Term>{" "}
            invades the endometrium.
          </>,
        ]}
      />

      <DaySection
        title="Day 8: Embryoblast Differentiation"
        image={day8}
        text={[
          <>Embryoblast differentiates into bilaminar disc.</>,
          <>
            Bilaminar disc contains a{" "}
            <Term
              definition="Lower layer of cells in the early embryo that combines to the formation."
              setTooltip={setTooltip}
            >
              hypoblast
            </Term>{" "}
            and{" "}
            <Term
              definition="The upper layer of cells in the early embryo that gives rise to the entire embryo."
              setTooltip={setTooltip}
            >
              epiblast
            </Term>{" "}
            layer.
          </>,
          <>
            Synctiotrophoblast continues to invade the endometrium, enabling the
            blastocyst to burrow itself.
          </>,
        ]}
      />

      <DaySection
        title="Day 9: Amniotic Cavity"
        image={day9}
        text={[
          <>
            Migrating hypoblast cells form{" "}
            <Term
              definition="A membrane formed by hypoblast cells that lines the umbilical vesicle."
              setTooltip={setTooltip}
            >
              exocoelomic membrane
            </Term>
            .
          </>,
          <>
            Epiblast cells become amnioblasts that line the{" "}
            <Term
              definition="A fluid-filled space that forms above the epiblast, where the embryo develops and is protected."
              setTooltip={setTooltip}
            >
              amniotic cavity
            </Term>
            .
          </>,
        ]}
      />

      <DaySection
        title="Day 10: Lacunae"
        image={day10}
        text={[
          <>
            <Term
              definition="Small fluid-filled spaces that form within tissue."
              setTooltip={setTooltip}
            >
              Vacoules
            </Term>{" "}
            appear in the syncytiotrophoblast.
          </>,
          <>Vacoules fuse to form lacunae.</>,
          <>
            <Term
              definition="A layer of mesodermal tissue surrounding the embryo that contributes to supporting structures such as the chorion."
              setTooltip={setTooltip}
            >
              Extraembryonic mesoderm
            </Term>{" "}
            develops from the exocoelomic membrane.
          </>,
        ]}
      />

      <DaySection
        title="Day 11: Closing Plug"
        image={day11}
        text={[
          <>The blastocyst becomes fully embedded in the endometrium.</>,
          <>
            A{" "}
            <Term
              definition="A temporary layer of tissue that forms in the endometrium to seal the site where the embryo implanted."
              setTooltip={setTooltip}
            >
              closing plug
            </Term>{" "}
            forms in the endometrium.
          </>,
        ]}
      />

      <DaySection
        title="Day 12: Uteroplacental Circulation"
        image={day12}
        text={[
          <>
            Lacunae within the syncytiotrophoblast interconnect forming lacunar
            networks.
          </>,
          <>
            Lacunar networks fill with maternal blood, initiating{" "}
            <Term
              definition="The flow of maternal blood into the lacunae of the syncytiotrophoblast, allowing exchange between the mother and developing embryo."
              setTooltip={setTooltip}
            >
              uteroplacental circulation
            </Term>
            .
          </>,
        ]}
      />

      <DaySection
        title="Day 13: Extraembryonic Coelom"
        image={day13}
        text={[
          <>
            Extraembryonic coelomic spaces form within extraembryonic mesoderm.
          </>,
          <>
            Extraembryonic coelomic spaces fuse to form{" "}
            <Term
              definition="A fluid-filled cavity that forms within the extraembryonic mesoderm, surrounding the amnion and umbilical vesicle. The extraembryonic coelom is also called the chorionic cavity."
              setTooltip={setTooltip}
            >
              extraembryonic coelom
            </Term>
            .
          </>,
        ]}
      />

      <DaySection
        title="Day 14: Prechordal Plate"
        image={day14}
        text={[
          <>
            Primary chorionic villi develop as the cytotrophoblast proliferates
            into the villi.
          </>,
          <>
            <Term
              definition="A thickened region of cells in the early embryo that helps establish the cranial end of the embryo."
              setTooltip={setTooltip}
            >
              Prechordal plate
            </Term>{" "}
            appears in the hypoblast.
          </>,
          <>
            Part of the primary umbilical vesicle pinches off forming, the{" "}
            <Term
              definition="A smaller structure that forms from the primary umbilical vesicle and contributes to early nutrient transfer and development."
              setTooltip={setTooltip}
            >
              secondary umbilical vesicle
            </Term>
            .
          </>,
          <>Germinal stage is complete.</>,
        ]}
      />

      <DaySection
        title="Day 15: Primitive Streak"
        image={day15}
        text={[
          <>
            The{" "}
            <Term
              definition="The portion of extraembryonic mesoderm that lines the amnion and cytotrophoblast, contributing to the embryo’s outer supporting layers."
              setTooltip={setTooltip}
            >
              somatic extraembryonic mesoderm
            </Term>{" "}
            covers the amnion.
          </>,
          <>
            The{" "}
            <Term
              definition="The portion of extraembryonic mesoderm that lines the umbilical vesicle and is associated with the embryo’s internal supporting structures."
              setTooltip={setTooltip}
            >
              splanchnic extraembryonic mesoderm
            </Term>{" "}
            covers the umbilical vesicle.
          </>,
          <>
            <Term
              definition="Linear structure that forms on the surface of the early embryo, marking the site where cell being to migrate."
              setTooltip={setTooltip}
            >
              Primitive streak
            </Term>{" "}
            forms at caudal end of the epiblast.
          </>,
          <>
            Epiblast cells ingress through the primtive streak, beginning
            gastrulation.
          </>,
        ]}
      />

      <DaySection
        title="Day 16: Gastrulation"
        image={day16}
        text={[
          <>
            First ingressing epiblast cells displace hypoblast from{" "}
            <Term
              definition="The innermost germ layer of the embryo that gives rise to structures such as the lining of the digestive and respiratory systems."
              setTooltip={setTooltip}
            >
              endoderm
            </Term>
            .
          </>,
          <>
            Subsequent epiblast migration forms{" "}
            <Term
              definition="The middle germ layer of the embryo that gives rise to structures such as muscles, bones, and the circulatory system."
              setTooltip={setTooltip}
            >
              mesoderm
            </Term>
            .
          </>,
          <>
            Epiblast cells that do not migrate become{" "}
            <Term
              definition="The outermost germ layer of the embryo that gives rise to structures such as the skin and nervous system."
              setTooltip={setTooltip}
            >
              ectoderm
            </Term>
            .
          </>,
          <>Embryo is now a trilaminar disc.</>,
          <>
            <Term
              definition="The process during which the germ layers develop into organs and tissues of the embryo."
              setTooltip={setTooltip}
            >
              Organogenesis
            </Term>{" "}
            begins.
          </>,
        ]}
      />

      <DaySection
        title="Day 17: Notochord"
        image={day17}
        text={[
          <>
            Cell migration and proliferation during gastrulation elongate the
            embryo.
          </>,
          <>
            Some of the ingressing epiblast cells form the{" "}
            <Term
              definition="A rod-like structure that forms along the midline of the embryo and helps guide the development of the nervous system."
              setTooltip={setTooltip}
            >
              notochord
            </Term>
            .
          </>,
          <>
            Extraembryonic mesoderm invades the core of the primary villi
            fomring{" "}
            <Term
              definition="Chorionic villi that contain a core of extraembryonic mesoderm between the outer trophoblast layers."
              setTooltip={setTooltip}
            >
              secondary chorionic villi
            </Term>
            .
          </>,
        ]}
      />

      <DaySection
        title="Day 18: Neural Plate"
        image={day18}
        text={[
          <>
            Notochord signals the overlying ectoderm to thicken into the{" "}
            <Term
              definition="A thickened region of ectoderm that forms on the surface of the embryo and gives rise to the nervous system."
              setTooltip={setTooltip}
            >
              neural plate
            </Term>
            .
          </>,
          <>
            Mesoderm in villus differentiate into fetal blood vessels, forming{" "}
            <Term
              definition="Chorionic villi that contain developing fetal blood vessels, allowing early exchange between the embryo and maternal blood."
              setTooltip={setTooltip}
            >
              tertiary chorionic villi
            </Term>
            .
          </>,
        ]}
      />

      <DaySection
        title="Day 19: Neural Folds"
        image={day19}
        text={[
          <>
            Notochord signaling causes the neural plate to fold into{" "}
            <Term
              definition="Elevated edges of the neural plate that move toward each other."
              setTooltip={setTooltip}
            >
              neural folds
            </Term>
            .
          </>,
          <>
            <Term
              definition="Paired early heart structures that develop from mesoderm and later join to form the primitive heart."
              setTooltip={setTooltip}
            >
              Endocardial tubes
            </Term>{" "}
            begin forming from cardiogenic mesoderm.
          </>,
          <>
            Mesoderm differentiates into{" "}
            <Term
              definition="The portion of mesoderm located beside the neural tube that forms somites, which give rise to structures like muscle and bone."
              setTooltip={setTooltip}
            >
              paraxial
            </Term>{" "}
            mesoderm,{" "}
            <Term
              definition="The portion of mesoderm located between the paraxial and lateral plate mesoderm that forms parts of the urogenital system."
              setTooltip={setTooltip}
            >
              intermediate
            </Term>{" "}
            mesoderm,{" "}
            <Term
              definition="The outer portion of mesoderm that splits into two layers and contributes to the formation of body cavities and organ linings."
              setTooltip={setTooltip}
            >
              lateral plate
            </Term>{" "}
            mesoderm.
          </>,
        ]}
      />

      <DaySection
        title="Day 20: Neurulation"
        image={day20}
        text={[
          <>Neural folds elevate and move toward each other.</>,
          <>
            <Term
              definition="A group of cells that form at the edges of the neural folds and migrate throughout the embryo to form various structures."
              setTooltip={setTooltip}
            >
              Neural crest cells
            </Term>{" "}
            are specified at the tips of the neural folds.
          </>,
          <>
            Paraxial mesoderm begins differentiating into{" "}
            <Term
              definition="Segmented blocks of mesoderm that form along the sides of the neural tube and give rise to muscle, bone, and dermis."
              setTooltip={setTooltip}
            >
              somites
            </Term>
            .
          </>,
        ]}
      />

      <DaySection
        title="Day 21: Neural Tube"
        image={day21}
        text={[
          <>
            Neural folds begin to fuse forming the{" "}
            <Term
              definition="A hollow structure formed from the neural folds that develops into the brain and spinal cord."
              setTooltip={setTooltip}
            >
              neural tube
            </Term>
            .
          </>,
          <>
            Neural crest cells begin{" "}
            <Term
              definition="A process where epithelial cells lose their polarity and cell-cell adhesion, becoming migratory mesenchymal cells."
              setTooltip={setTooltip}
            >
              epithelial-mesenchymal transition
            </Term>
            .
          </>,
          <>
            Intermediate mesoderm forms the{" "}
            <Term
              definition="A raised structure formed from intermediate mesoderm that gives rise to parts of the urinary and reproductive systems."
              setTooltip={setTooltip}
            >
              urogenital ridge
            </Term>
            .
          </>,
        ]}
      />

      <DaySection
        title="Day 22: Embryonic Folding"
        image={day22}
        text={[
          <>
            Embryonic folding begins in both{" "}
            <Term
              definition="A process in which the embryo folds along its head-to-tail axis, transforming it from a flat disc into a curved, three-dimensional shape."
              setTooltip={setTooltip}
            >
              craniocaudal
            </Term>{" "}
            and{" "}
            <Term
              definition="A process in which the sides of the embryo fold toward the midline, forming a cylindrical body shape."
              setTooltip={setTooltip}
            >
              lateral
            </Term>{" "}
            directions.
          </>,
          <>
            Embryonic folding converts the flat trilamniar disc into a 3D body
            form.
          </>,
        ]}
      />

      <DaySection
        title="Day 23: Lateral Folding"
        image={day23}
        text={[
          <>Lateral edges of the embryo fold ventrally.</>,
          <>
            The folds move toward each other and eventually fuse to form the
            ventral body wall.
          </>,
          <>
            Part of the umbilical vesicle is incorporated into the embryo as the{" "}
            <Term
              definition="A tube formed from endoderm during folding that develops into the digestive tract."
              setTooltip={setTooltip}
            >
              gut tube
            </Term>
            .
          </>,
          <>
            Endocardial{" "}
            <Term
              definition="Paired early heart structures that form from mesoderm and later fuse to form a single primitive heart tube."
              setTooltip={setTooltip}
            >
              heart tubes
            </Term>{" "}
            move toward the midline and fuse.
          </>,
          <>
            Dorsal{" "}
            <Term
              definition="Paired early blood vessels in the embryo that later fuse to form the descending aorta."
              setTooltip={setTooltip}
            >
              aortae
            </Term>{" "}
            move towards the midline and fuse.
          </>,
        ]}
      />

      <DaySection
        title="Day 24: Craniocaudal Folding"
        image={day24}
        text={[
          <>The head and tail ends of the embryo fold ventrally.</>,
          <>The embryo curves into a C-shaped structure.</>,
          <>
            The{" "}
            <Term
              definition="A thin membrane at the cranial end of the embryo that separates the future mouth from the foregut."
              setTooltip={setTooltip}
            >
              oropharyngeal membrane
            </Term>{" "}
            moves to ventral surface.
          </>,
          <>
            The{" "}
            <Term
              definition="A thin membrane at the caudal end of the embryo that separates the future anal opening from the hindgut."
              setTooltip={setTooltip}
            >
              cloacal membrane
            </Term>{" "}
            moves to the ventral surface.
          </>,
          <>The heart moves ventrally and into the thoracic region.</>,
        ]}
      />

      <DaySection
        title="Day 25: Cranial Neuropore Closes"
        image={day25}
        text={[
          <>Cranial neuropore closes, this region will form the brain.</>,
          <>
            The first{" "}
            <Term
              definition="A series of paired structures in the developing head and neck that give rise to parts of the face, neck, and associated structures."
              setTooltip={setTooltip}
            >
              pharyngeal arch
            </Term>{" "}
            becomes visible.
          </>,
          <>
            <Term
              definition="An outgrowth of endoderm from the early gut tube that develops into the liver."
              setTooltip={setTooltip}
            >
              Liver bud
            </Term>{" "}
            appears.
          </>,
          <>
            <Term
              definition="An outgrowth from the foregut that develops into the lower respiratory system."
              setTooltip={setTooltip}
            >
              Respiratory diverticulum
            </Term>{" "}
            forms.
          </>,
          <>
            Upper{" "}
            <Term
              definition="Small outgrowths from the body wall that develop into the limbs."
              setTooltip={setTooltip}
            >
              limb buds
            </Term>{" "}
            appear.
          </>,
        ]}
      />

      <DaySection
        title="Day 26: Mesoderm"
        image={day26}
        text={[
          <>
            Paraxial mesoderm forms{" "}
            <Term
              definition="Segmented blocks of mesoderm that form along the sides of the neural tube and give rise to muscle, bone, and dermis."
              setTooltip={setTooltip}
            >
              somites
            </Term>{" "}
            sequentially along the embryo.
          </>,
          <>
            Intermediate mesoderm forms the{" "}
            <Term
              definition="A longitudinal structure of intermediate mesoderm that develops into parts of the urinary system."
              setTooltip={setTooltip}
            >
              nephrogenic cord
            </Term>{" "}
            along the dorsal body wall.
          </>,
          <>
            Lateral plate mesoderm forms splits into{" "}
            <Term
              definition="The layer of lateral plate mesoderm associated with the ectoderm that contributes to the body wall and lining of body cavities."
              setTooltip={setTooltip}
            >
              somatic
            </Term>{" "}
            and{" "}
            <Term
              definition="The layer of lateral plate mesoderm associated with the endoderm that contributes to the walls of internal organs."
              setTooltip={setTooltip}
            >
              splanchnic
            </Term>{" "}
            layers.
          </>,
        ]}
      />

      <DaySection
        title="Day 27: Somites"
        image={day27}
        text={[
          <>Somites differentiate into sclerotome, myotome, and dermatome.</>,
          <>
            <Term
              definition="The portion of a somite that develops into the vertebrae and ribs."
              setTooltip={setTooltip}
            >
              Sclerotome
            </Term>{" "}
            forms the vertebrae and ribs.
          </>,
          <>
            <Term
              definition="The portion of a somite that develops into skeletal muscles."
              setTooltip={setTooltip}
            >
              Myotome
            </Term>{" "}
            forms skeletal muscles, dividing into epaxial and hypaxial muscles.
          </>,
          <>
            <Term
              definition="The portion of a somite that develops into the dermis of the skin."
              setTooltip={setTooltip}
            >
              Dermatome
            </Term>{" "}
            forms the dermis of the skin, mainly of the back.
          </>,
        ]}
      />

      <DaySection
        title="Day 28: Caudal Neuropore Closes"
        image={day28}
        text={[
          <>
            Caudal neuropore closes, completing neurulation and forming the
            spinal cord.
          </>,
          <>
            Cranial neural tube expands into{" "}
            <Term
              definition="The forebrain region of the developing brain that gives rise to the cerebrum."
              setTooltip={setTooltip}
            >
              prosencephalon
            </Term>
            ,{" "}
            <Term
              definition="The midbrain region of the developing brain that gives rise to the midbrain."
              setTooltip={setTooltip}
            >
              mesencephalon
            </Term>
            ,{" "}
            <Term
              definition="The hindbrain region of the developing brain that gives rise to the cerebellum and medulla."
              setTooltip={setTooltip}
            >
              rhombencephalon
            </Term>
            .
          </>,
          <>
            Embyronic folding is complete, the embryo has C-shaped body plan.
          </>,
          <>
            Lower{" "}
            <Term
              definition="Small outgrowths from the body wall that develop into the limbs."
              setTooltip={setTooltip}
            >
              limb buds
            </Term>{" "}
            appear.
          </>,
        ]}
      />

      <WeekSection
        title="Week 5: Organogenesis Continues"
        image={week5}
        sections={[
          {
            heading: "Internal Organs",
            items: [
              <>Stomach enlarges and begins rotation.</>,
              <>
                Liver grows rapidly and is the main site of{" "}
                <Term
                  definition="The process of formation of blood cells."
                  setTooltip={setTooltip}
                >
                  hematopoiesis
                </Term>
                .
              </>,
              <>Ventral and dorsal pancreatic buds form.</>,
              <>
                <Term
                  definition="The definitive kidney that develops from intermediate mesoderm and becomes the permanent kidney."
                  setTooltip={setTooltip}
                >
                  Metanephros
                </Term>{" "}
                begins developing.
              </>,
              <>
                <Term
                  definition="A thin membrane that grows within the primitive atrium and contributes to the formation of the interatrial septum."
                  setTooltip={setTooltip}
                >
                  Septum primum
                </Term>{" "}
                begins forming.
              </>,
            ],
          },
          {
            heading: "Nervous & Sensory Systems",
            items: [
              <>
                <Term
                  definition="A fluid-filled structure that forms from ectoderm and develops into the inner ear."
                  setTooltip={setTooltip}
                >
                  Otic vesicle
                </Term>{" "}
                forms inner ear structures.
              </>,
              <>
                <Term
                  definition="Paired outgrowths from the forebrain that develop into structures of the eye."
                  setTooltip={setTooltip}
                >
                  Optic vesicles
                </Term>{" "}
                and{" "}
                <Term
                  definition="A thickened region of surface ectoderm that develops into the lens of the eye."
                  setTooltip={setTooltip}
                >
                  lens placode
                </Term>{" "}
                form.
              </>,
              <>Rapid brain growth occurs.</>,
              <>
                Brain subdivides into{" "}
                <Term
                  definition="A division of the forebrain that develops into the cerebral hemispheres."
                  setTooltip={setTooltip}
                >
                  telencephalon
                </Term>
                ,{" "}
                <Term
                  definition="A division of the forebrain that develops into structures such as the thalamus and hypothalamus."
                  setTooltip={setTooltip}
                >
                  diencephalon
                </Term>
                ,{" "}
                <Term
                  definition="A division of the developing brain that forms in the midbrain."
                  setTooltip={setTooltip}
                >
                  mesencephalon
                </Term>
                ,{" "}
                <Term
                  definition="A division of the hindbrain that develops into the pons and cerebellum."
                  setTooltip={setTooltip}
                >
                  metencephalon
                </Term>
                ,{" "}
                <Term
                  definition="A division of the hindbrain that develops into the medulla oblongata."
                  setTooltip={setTooltip}
                >
                  myelencephalon
                </Term>
                .
              </>,
            ],
          },
          {
            heading: "Musculoskeletal System",
            items: [
              <>Limb buds elongate and become paddle-shaped.</>,
              <>
                <Term
                  definition="Muscle precursor cells that differentiate and fuse to form skeletal muscle fibers."
                  setTooltip={setTooltip}
                >
                  Myoblasts
                </Term>{" "}
                migrate into body wall and limb buds.
              </>,
              <>
                <Term
                  definition="A type of cartilage with a smooth, homogeneous extracellular matrix that serves as a template for bone formation."
                  setTooltip={setTooltip}
                >
                  Hyaline cartilage
                </Term>{" "}
                models form.
              </>,
            ],
          },
          {
            heading: "Integumentary System",
            items: [
              <>
                Ectoderm forms{" "}
                <Term
                  definition="The deepest layer of the epidermis composed of actively dividing cells that produce new skin cells."
                  setTooltip={setTooltip}
                >
                  basal layer
                </Term>{" "}
                and{" "}
                <Term
                  definition="A temporary outer layer of the embryonic epidermis that protects the developing skin."
                  setTooltip={setTooltip}
                >
                  periderm
                </Term>
                .
              </>,
            ],
          },
        ]}
      />

      <WeekSection
        title="Week 6: Late Organogenesis"
        image={week6}
        sections={[
          {
            heading: "Internal Organs",
            items: [
              <>Intestines herniate into the extraembryonic coelom.</>,
              <>Midgut rotation begins.</>,
              <>Metanephros continues development.</>,
              <>Secondary bronchi divide into tertiary bronchi.</>,
            ],
          },
          {
            heading: "Nervous & Sensory Systems",
            items: [
              <>
                <Term
                  definition="Small mesenchymal swelling that from the first pharyngeal cleft and develop into parts of the external ear."
                  setTooltip={setTooltip}
                >
                  Auricular hillocks
                </Term>{" "}
                form.
              </>,
              <>
                <Term
                  definition="Depressions that form from the nasal placodes and develop into the nasal cavities."
                  setTooltip={setTooltip}
                >
                  Nasal pits
                </Term>{" "}
                form.
              </>,
              <>
                <Term
                  definition="A hollow structure formed from the lens placode that develops into the lens of the eye."
                  setTooltip={setTooltip}
                >
                  Lens vesicles
                </Term>{" "}
                form.
              </>,
            ],
          },
          {
            heading: "Musculoskeletal System",
            items: [
              <>
                <Term
                  definition="Regions in developing bone where bone formation first begins."
                  setTooltip={setTooltip}
                >
                  Primary ossification centers
                </Term>{" "}
                appear in hyaline cartilage bone models.
              </>,
              <>
                Digital rays begin to develop via{" "}
                <Term
                  definition="A process of programmed cell death."
                  setTooltip={setTooltip}
                >
                  apoptosis
                </Term>
                .
              </>,
              <>
                Myoblasts fuse to form multinucleated{" "}
                <Term
                  definition="Elongated structures formed by the fusion of myoblasts that develop into muscle fibers."
                  setTooltip={setTooltip}
                >
                  myotubes
                </Term>
                .
              </>,
            ],
          },
        ]}
      />

      <WeekSection
        title="Week 7: Late Organogenesis"
        image={week7}
        sections={[
          {
            heading: "Internal Organs",
            items: [
              <>Pancreatic buds begin to fuse.</>,
              <>Kidneys ascend to the lumbar region and form new arteries.</>,
              <>
                <Term
                  definition="A temporary connection between the midgut and the umbilical vesicle in the early embryo."
                  setTooltip={setTooltip}
                >
                  Omphaloenteric duct
                </Term>{" "}
                degenerates.
              </>,
            ],
          },
          {
            heading: "Nervous & Sensory Systems",
            items: [
              <>
                Auricular hillocks form the{" "}
                <Term
                  definition="Cartilaginous outer part of the ear."
                  setTooltip={setTooltip}
                >
                  auricle
                </Term>
                .
              </>,
              <>
                <Term
                  definition="The light-sensitive layer of the eye that detects light and converts it into signals sent to the brain."
                  setTooltip={setTooltip}
                >
                  Retina
                </Term>{" "}
                develops.
              </>,
            ],
          },
          {
            heading: "Musculoskeletal System",
            items: [
              <>Ossification of upper limb bones begins.</>,
              <>
                <Term
                  definition="A process of bone formation where bone develops directly from mesenchymal tissue without a cartilage model."
                  setTooltip={setTooltip}
                >
                  Intramembranous ossification
                </Term>{" "}
                begins.
              </>,
              <>
                <Term
                  definition="A process of bone formation where bone develops by replacing a cartilage model."
                  setTooltip={setTooltip}
                >
                  Endochondral ossification
                </Term>{" "}
                continues.
              </>,
              <>Muscle fibers organize into specific muscle groups.</>,
              <>Notches between digital rays deepen.</>,
            ],
          },
          {
            heading: "Integumentary System",
            items: [
              <>
                Back dermis derives from{" "}
                <Term
                  definition="Portions of somites that develop into the dermis of the skin."
                  setTooltip={setTooltip}
                >
                  dermatomes
                </Term>
                .
              </>,
              <>
                Body wall and limb dermis derive from{" "}
                <Term
                  definition="The layer of lateral plate mesoderm associated with the ectoderm."
                  setTooltip={setTooltip}
                >
                  somatic lateral plate mesoderm
                </Term>
                .
              </>,
              <>
                Face and neck dermis derives from{" "}
                <Term
                  definition="A group of cells that form at the edges of the neural folds and migrate to different parts of the embryo to form a variety of structures."
                  setTooltip={setTooltip}
                >
                  neural crest cells
                </Term>
                .
              </>,
            ],
          },
        ]}
      />

      <WeekSection
        title="Week 8: Embryogenesis Complete"
        image={week8}
        sections={[
          {
            heading: "Internal Organs",
            items: [
              <>Intestines remain in the extraembryonic coelom.</>,
              <>Midgut continues to elongate and rotate.</>,
              <>
                <Term
                  definition="A cavity at the caudal end of the embryo that later divides to form parts of the urinary and digestive systems."
                  setTooltip={setTooltip}
                >
                  Cloaca
                </Term>{" "}
                divides into the urogenital sinus and anorectal canal.
              </>,
            ],
          },
          {
            heading: "Nervous & Sensory Systems",
            items: [
              <>Eyelids form.</>,
              <>
                <Term
                  definition="The process by which the primitive heart is divided into four separate chambers."
                  setTooltip={setTooltip}
                >
                  Cardiac septation
                </Term>{" "}
                is largely complete.
              </>,
              <>Auricle moves upward and laterally.</>,
            ],
          },
          {
            heading: "Musculoskeletal System",
            items: [
              <>Digits are fully separated.</>,
              <>The skeleton is largely cartilaginous.</>,
              <>
                Skeletal muscles are largely established in their anatomical
                positions.
              </>,
              <>
                Upper limbs undergo lateral rotation, so elbows face
                posteriorly.
              </>,
              <>
                Lower limbs undergo medial rotation, so knees face anteriorly.
              </>,
            ],
          },
        ]}
      />

      {/* CONCLUSION */}
      <DaySection
        title="To be continued"
        image={conclusion}
        text={[
          <>Embryogenesis is complete at week 8.</>,
          <>
            After this stage, the embryo is termed a{" "}
            <Term
              definition="A developing human offspring during the prenatal stage after embryogenesis."
              setTooltip={setTooltip}
            >
              fetus
            </Term>
            .
          </>,
          <>
            From week 9 until birth, the fetus grows in size while its organs
            mature and become functional.
          </>,
          <>
            After birth, the fetus is referred to as a{" "}
            <Term
              definition="A newborn baby, typically referring to the first 4 weeks after birth."
              setTooltip={setTooltip}
            >
              neonate
            </Term>
            .
          </>,
        ]}
      />

      {/* Refrences */}
      <section
        style={{
          minHeight: "100vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0px 80px",
        }}
      >
        <h2 style={{ marginBottom: "40px" }}>References</h2>

        <div style={{ maxWidth: "1000px" }}>
          <p className="refText">
            Moore, K. L.{" "}
            <i>The Developing Human: Clinically Oriented Embryology.</i>
          </p>

          <p className="refText">
            University of Toronto. <i>ANA301H1: Human Embryology</i>, instructed
            by Prof. Tania Alexson
          </p>

          <p className="refText">
            Embryology.ch.{" "}
            <a href="https://embryology.ch/" target="_blank">
              https://embryology.ch/
            </a>
          </p>

          <p className="refText">
            UNSW Embryology.{" "}
            <a href="https://embryology.med.unsw.edu.au" target="_blank">
              https://embryology.med.unsw.edu.au
            </a>
          </p>

          <p className="refText">
            MedicoVisual. YouTube Channel.{" "}
            <a href="https://www.youtube.com/@MedicoVisual" target="_blank">
              https://www.youtube.com/@MedicoVisual
            </a>
          </p>

          <p className="refText">
            Ninja Nerd. YouTube Channel.{" "}
            <a
              href="https://www.youtube.com/@NinjaNerdOfficial"
              target="_blank"
            >
              https://www.youtube.com/@NinjaNerdOfficial
            </a>
          </p>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className={`scrollIndicator ${!isIntroVisible ? "show" : ""}`}>
        {Array.from({ length: 34 }).map((_, i) => (
          <div
            key={i}
            className={i === activeDay ? "dot active" : "dot"}
            onClick={() => {
              const sections = document.querySelectorAll("section");
              const target = sections[i + 1];
              target?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        ))}
      </div>

      <div
        ref={tooltipRef}
        className={`tooltip ${tooltip.visible ? "show" : "hide"}`}
        style={{
          left: tooltip.x,
          top: tooltip.y,
        }}
      >
        {tooltip.text}
      </div>
    </div>
  );
}

export default App;
