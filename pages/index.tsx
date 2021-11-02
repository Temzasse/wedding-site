import React from "react";
import Head from "next/head";
import Img from "react-optimized-image";
import { styled } from "@styles/styled";
import { Text, Stack, Spacer, Link } from "@components/common";
import QuizForm from "@components/QuizForm";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import logoImg from "../images/logo.png";
import teemuMilkaImg from "../images/teemu_milka.png";
import mapImg from "../images/map.png";
import branchImg from "../images/branch.png";
import leafsImg from "../images/leafs.png";
import { PAGE_WIDTH } from "../constants";

export default function Home() {
  const [quizVisible, setQuizVisible] = React.useState(false);

  React.useEffect(() => {
    function hashHandler() {
      const hash = location.hash.substr(1);
      if (!quizVisible && hash === "quiz") setQuizVisible(true);
    }

    window.addEventListener("hashchange", hashHandler, false);

    hashHandler();

    return () => {
      window.removeEventListener("hashchange", hashHandler, false);
    };
  }, []);

  return (
    <Page>
      <Head>
        <title>Teemun ja Milkan häät</title>
      </Head>

      <Content>
        <Header>
          <HeaderDecoration>
            <Img src={leafsImg} />
          </HeaderDecoration>

          <Stack
            align="center"
            spacing={{ "@initial": "xxxlarge", "@md": "xxlarge" }}
          >
            <Stack align="center" spacing="large">
              <Img
                src={logoImg}
                alt="Teemun ja Milkan alkukirjaimet"
                width={120}
                height={120}
                webp
              />

              <Img
                src={teemuMilkaImg}
                alt="Teemu ja Milka"
                width={864}
                height={156}
                webp
                style={{ height: "auto", maxWidth: "80vw" }}
              />
            </Stack>

            <Navbar />
          </Stack>
        </Header>

        <Spacer size={{ "@initial": "xxxlarge", "@md": "xxlarge" }} />

        <main>
          <Stack spacing="xxxlarge">
            <Section>
              <Stack spacing="xlarge">
                <Stack spacing="large" align="center">
                  <Text variant="title2" id="tervetuloa">
                    Tervetuloa
                  </Text>

                  <LeafDecoration />

                  <Stack spacing="medium">
                    <Text variant="body">
                      Toivotamme sinut tervetulleeksi juhlimaan häitämme
                      joulukuun 4. päivänä Hirvihaaran kartanon Lasipaviljonkiin
                      Mäntsälään. Luvassa on rentoa ja lämmintä tunnelmaa
                      ystävien ja perheen kesken, hyvää ruokaa, nauramista ja
                      toivottavasti myös paljon tanssimista!
                    </Text>

                    <Text variant="body">
                      Tältä sivulta löydät tietoa häihin liittyvistä käytännön
                      asioista.
                    </Text>

                    <Text variant="body">Joulukuussa juhlitaan!</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Section>

            <Section>
              <Stack spacing="large" align="center">
                <Text variant="title2" id="reittiohjeet">
                  Reittiohjeet
                </Text>

                <LeafDecoration />

                <MapImg>
                  <Img
                    src={mapImg}
                    alt="Karttaohjeet Hirvihaaran kartanolle"
                    width={PAGE_WIDTH}
                    height={0.33333 * PAGE_WIDTH}
                    webp
                  />
                </MapImg>

                <Text variant="title3">Hirvihaaran kartano</Text>

                <Spacer size="normal" />

                <Text variant="body">Lasipaviljonki</Text>

                <Link
                  href="https://g.page/Hirvihaara?share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kartanonlenkki 56, 04680 Hirvihaara
                </Link>

                <Text variant="body">
                  Hirvihaaran kartano sijaitsee muutaman kilometrin päässä
                  Mäntsälän keskustasta. Kartanon pihapiirissä on iso, ilmainen
                  parkkipaikka. Mäntsälään pääsee myös helposti junalla, ja
                  keskustasta voi ottaa kartanolle taksikyydin. Kannustamme myös
                  järjestämään kimppakyytejä!
                </Text>

                <Link
                  href="http://hirvihaarankartano.fi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hirvihaaran verkkosivut
                </Link>
              </Stack>
            </Section>

            <Section>
              <Stack spacing="large" align="center">
                <Text variant="title2" id="lisatietoja">
                  Lisätietoja
                </Text>

                <LeafDecoration />

                <div>
                  <Stack spacing="xlarge" align="center">
                    <div>
                      <Stack spacing="medium" align="center">
                        <Text variant="title3">Aikataulu</Text>

                        <Text variant="body">
                          Vihkiminen alkaa <strong>klo 16</strong>{" "}
                          juhlapaikalla, Lasipaviljongissa. Saavuthan ajoissa
                          paikalle. Juhlat jatkuvat juhlijoiden kisakunnosta
                          riippuen myöhään yöhön.
                        </Text>
                      </Stack>
                    </div>

                    <div>
                      <Stack spacing="medium" align="center">
                        <Text variant="title3">Majoitus</Text>

                        <Text variant="body">
                          Hirvihaaran kartanolta on mahdollista varata majoitus
                          hintaan 178 €/yö (kahden hengen huone) tai 152 €/yö
                          (yhden hengen huone). Lisävuode 50 €/yö.
                        </Text>

                        <Text variant="body">
                          Kartanolla on myös pienempi sisarhotelli Mäntsälän
                          keskustassa,{" "}
                          <Link href="https://www.kartanonmeijeri.com/">
                            Hotelli Kartanon Meijeri
                          </Link>
                          , jossa kahden hengen huone on 135 €/yö ja yhden
                          hengen huone 108 €/yö. Lisätietoja majoittumisesta ja
                          varauksista saa osoitteesta{" "}
                          <Link
                            href="mailto:myynti@hirvihaarankartano.fi"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            myynti@hirvihaarankartano.fi
                          </Link>
                          . Muistathan mainita, että olet häävieras.
                        </Text>
                      </Stack>
                    </div>

                    <div>
                      <Stack spacing="medium" align="center">
                        <Text variant="title3">Hääparin muistaminen</Text>

                        <Text variant="body">
                          Useiden yhdessä asuttujen vuosien jälkeen lusikat,
                          soppakauhat, leivänpaahtimet ja maljakot ovat jo
                          löytäneet tiensä kotiimme. Häälahjojen sijaan meille
                          tärkeintä onkin saada juhlia tätä ihanaa päivää
                          rakkaitten vieraittemme kanssa! Jos kuitenkin tahdot
                          muistaa meitä lahjalla, toivomme pientä lahjoitusta
                          häämatkaamme varten. Muistamiset voi osoittaa suoraan
                          häämatkatilillemme <em>FI7214023202011082</em>.
                        </Text>
                      </Stack>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </Section>

            <Section>
              <Stack spacing="large" align="center">
                <Text variant="title2" id="yhteystiedot">
                  Yhteystiedot
                </Text>

                <LeafDecoration />

                <Text variant="body">
                  Onko sinulla kysyttävää ilmoittautumisesta, aikataulusta tai
                  jostain muusta häihin liittyvästä asiasta? Meihin molempiin
                  voi olla yhteydessä sekä sähköpostitse että puhelimitse
                  WhatsAppissa, tekstarilla tai soittamalla.
                </Text>

                <Spacer size="xlarge" />

                <div>
                  <Stack
                    axis={{ "@initial": "x", "@md": "y" }}
                    spacing="xlarge"
                  >
                    <div>
                      <Stack spacing="small" align="center">
                        <Text variant="title3">Teemu Taskula</Text>
                        <Link
                          href="mailto:teemu.taskula@taitounited.fi"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          teemu.taskula@taitounited.fi
                        </Link>
                        <Link href="tel:+358400848728">+358400848728</Link>
                      </Stack>
                    </div>

                    <div>
                      <Stack spacing="small" align="center">
                        <Text variant="title3">Milka Nissinen</Text>
                        <Link
                          href="mailto:milkamarianne@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          milkamarianne@gmail.com
                        </Link>
                        <Link href="tel:+358445758980">+358445758980</Link>
                      </Stack>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </Section>

            <Section lang="en">
              <Stack spacing="large" align="center">
                <Text variant="title2" id="in-english">
                  In English
                </Text>

                <LeafDecoration />

                <Stack spacing="medium">
                  <Text variant="body">
                    Hey you international guest! We warmly welcome you to
                    celebrate our wedding on December 4 in Mäntsälä, Finland.
                    The wedding ceremony and reception will take place at{" "}
                    <Link
                      href="https://hirvihaarankartano.fi/en/glass-pavilion"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hirvihaaran kartano Glass Pavilion
                    </Link>
                    . The ceremony will begin at <br />4 p.m. and the reception
                    and party will go on until we drop 🕺🏼💃🏼
                  </Text>

                  <Text variant="body">
                    Please confirm your attendance directly to either Teemu or
                    Milka by <strong>September 15</strong>, the latest.
                  </Text>

                  <Text variant="body">
                    Regarding your arrival to the venue and accommodation, don’t
                    worry – <br />
                    we've got you covered.
                  </Text>

                  <Text variant="body">Hope to see you in December!</Text>
                </Stack>
              </Stack>
            </Section>

            {quizVisible && (
              <Section>
                <Stack spacing="large" align="center">
                  <Stack spacing="small" align="center">
                    <Text variant="title2" id="quiz">
                      Häävisa
                    </Text>
                    <Text variant="title3" color="tertiaryLight">
                      Wedding quiz
                    </Text>
                  </Stack>

                  <LeafDecoration />

                  <QuizForm />
                </Stack>
              </Section>
            )}

            <form
              name="quiz"
              method="post"
              data-netlify="true"
              className="visually-hidden"
            >
              <input type="hidden" name="form-name" value="quiz" />
            </form>
          </Stack>
        </main>

        <Spacer size="xxxlarge" />

        <Footer />
      </Content>
    </Page>
  );
}

function LeafDecoration() {
  return (
    <Img
      src={branchImg}
      alt=""
      width={150}
      height={70}
      webp
      style={{ height: "auto" }}
    />
  );
}

const Page = styled("div", {
  width: "100%",
});

const Content = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: `${PAGE_WIDTH}px`,
  margingHorizontal: "auto",
  paddingTop: "300px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 24px rgb(0, 0, 0, 0.05)",
  overflow: "hidden",

  "@md": {
    paddingTop: "200px",
  },
  "@sm": {
    paddingTop: "120px",
  },
});

const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  paddingHorizontal: "$normal",
});

const HeaderDecoration = styled("div", {
  position: "absolute",
  top: "0px",
  left: "0px",
  right: "0px",
  "& > img": {
    width: "100%",
    objectFit: "contain",
  },
});

const MapImg = styled("div", {
  margingHorizontal: "calc(-1 * $normal) !important",

  "& > picture, img": {
    width: "100%",
    height: "auto",
  },
});
