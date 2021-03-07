import Head from "next/head";
import Img from "react-optimized-image";
import { styled } from "@styles/styled";
import { Text, Stack, Spacer, Link } from "@components/common";
import SignupForm from "@components/SignupForm";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import logoImg from "../images/logo.png";
import teemuMilkaImg from "../images/teemu_milka.png";
import mapImg from "../images/map.png";
import branchImg from "../images/branch.png";
import leafsImg from "../images/leafs.png";
import { PAGE_WIDTH } from "../constants";

export default function Home() {
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

          <Stack align="center" spacing="xxxlarge">
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
              />
            </Stack>

            <Navbar />
          </Stack>
        </Header>

        <Spacer size="xxxlarge" />

        <main>
          <Stack spacing="xxxlarge">
            <Section>
              <Stack spacing="xlarge" align="center">
                <Stack spacing="large" align="center">
                  <Text variant="title2" id="ilmottaudu">
                    Tervetuloa
                  </Text>

                  <LeafDecoration />

                  <Text variant="body">
                    Series A financing value proposition handshake
                    business-to-consumer social proof scrum project release lean
                    startup innovator seed money user experience. Partner
                    network vesting period low hanging fruit deployment advisor
                    equity backing. Partner network graphical user interface
                    virality disruptive stock.
                  </Text>
                </Stack>
              </Stack>

              <Spacer size="xlarge" />

              <SignupForm />
            </Section>

            <Section>
              <Stack spacing="large" align="center">
                <Text variant="title2" id="reittiohjeet">
                  Reittiohjeet
                </Text>

                <LeafDecoration />

                <Img
                  src={mapImg}
                  alt="Karttaohjeet Hirvihaaran kartanolle"
                  width={PAGE_WIDTH}
                  height={0.33333 * PAGE_WIDTH}
                  webp
                />

                <Text variant="title3">Hirvihaaran kartano</Text>

                <Spacer size="normal" />

                <Text variant="body">Lasipaviljonki</Text>

                <Link href="https://g.page/Hirvihaara?share">
                  Kartanonlenkki 56, 04680 Hirvihaara
                </Link>

                <Text variant="body">
                  Series A financing value proposition handshake
                  business-to-consumer social proof scrum project release lean
                  startup innovator seed money user experience. Partner network
                  vesting period low hanging fruit deployment advisor equity
                  backing. Partner network graphical user interface virality
                  disruptive stock.
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
                          Series A financing value proposition handshake
                          business-to-consumer social proof scrum project
                          release lean startup innovator seed money user
                          experience. Partner network vesting period low hanging
                          fruit deployment advisor equity backing. Partner
                          network graphical user interface virality disruptive
                          stock.
                        </Text>
                      </Stack>
                    </div>

                    <div>
                      <Stack spacing="medium" align="center">
                        <Text variant="title3">Hääparin muistaminen</Text>

                        <Text variant="body">
                          Series A financing value proposition handshake
                          business-to-consumer social proof scrum project
                          release lean startup innovator seed money user
                          experience. Partner network vesting period low hanging
                          fruit deployment advisor equity backing. Partner
                          network graphical user interface virality disruptive
                          stock.
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
                  Series A financing value proposition handshake
                  business-to-consumer social proof scrum project release lean
                  startup innovator seed money user experience.
                </Text>

                <Spacer size="xlarge" />

                <div>
                  <Stack axis="x" spacing="xlarge">
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
          </Stack>
        </main>

        <Spacer size="xxxlarge" />

        <Footer />
      </Content>
    </Page>
  );
}

function LeafDecoration() {
  return <Img src={branchImg} alt="" width={150} height={70} webp />;
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
  alignItems: "center",
  textAlign: "center",
});

const HeaderDecoration = styled("div", {
  position: "absolute",
  top: "0px",
  left: "0px",
  right: "0px",
  height: "500px",
  "& > img": {
    width: "100%",
    objectFit: "contain",
  },
});
