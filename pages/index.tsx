import Head from "next/head";
import Image from "next/image";
import { styled } from "@styles/styled";
import { Text, Stack, Spacer } from "@components/common";
import SignupForm from "@components/SignupForm";
import { CONTENT_WIDTH, PAGE_WIDTH } from "../constants";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Teemu & Milka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Header>
          <Stack align="center" spacing="xxxlarge">
            <Stack align="center" spacing="large">
              <div>
                <Image
                  src="/logo.png"
                  alt="Teemun ja Milkan alkukirjaimet"
                  width={120}
                  height={120}
                />
              </div>

              <div>
                <Image
                  src="/teemu_milka.png"
                  alt="Teemu ja Milka"
                  width={720 * 1.2}
                  height={130 * 1.2}
                />
              </div>
            </Stack>

            <Nav>
              <NavList>
                <NavItem>
                  <NavLink href="#ilmottaudu">Ilmoittaudu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#ilmottaudu">Reittiohjeet</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#ilmottaudu">Lisätietoja</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#ilmottaudu">Yhteystiedot</NavLink>
                </NavItem>
              </NavList>
            </Nav>
          </Stack>
        </Header>

        <Spacer size="xxxlarge" />

        <main>
          <Stack spacing="xxxlarge">
            <Section>
              <Stack spacing="xlarge" align="center">
                <Stack spacing="large" align="center">
                  <Text variant="title2">Tervetuloa</Text>

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
                <Text variant="title2">Reittiohjeet</Text>

                <LeafDecoration />

                <div>
                  <Image
                    src="/map.jpg"
                    alt="Karttaohjeet Hirvihaaran kartanolle"
                    width={PAGE_WIDTH}
                    height={(500 / 1500) * PAGE_WIDTH}
                  />
                </div>

                <Text variant="title3">Hirvihaaran kartano</Text>

                <Spacer size="small" />

                <Text variant="body">Lasipaviljonki</Text>

                <Text variant="body">Kartanonlenkki 56, 04680 Hirvihaara</Text>

                <Text variant="body">
                  Series A financing value proposition handshake
                  business-to-consumer social proof scrum project release lean
                  startup innovator seed money user experience. Partner network
                  vesting period low hanging fruit deployment advisor equity
                  backing. Partner network graphical user interface virality
                  disruptive stock.
                </Text>

                <Text variant="body">http://hirvihaarankartano.fi/</Text>
              </Stack>
            </Section>

            <Section>
              <Stack spacing="large" align="center">
                <Text variant="title2">Lisätietoja</Text>

                <LeafDecoration />

                <Text variant="title3">Aikataulu</Text>

                <Text variant="body">
                  Series A financing value proposition handshake
                  business-to-consumer social proof scrum project release lean
                  startup innovator seed money user experience. Partner network
                  vesting period low hanging fruit deployment advisor equity
                  backing. Partner network graphical user interface virality
                  disruptive stock.
                </Text>

                <Text variant="title3">Give me money</Text>

                <Text variant="body">
                  Series A financing value proposition handshake
                  business-to-consumer social proof scrum project release lean
                  startup innovator seed money user experience. Partner network
                  vesting period low hanging fruit deployment advisor equity
                  backing. Partner network graphical user interface virality
                  disruptive stock.
                </Text>
              </Stack>
            </Section>

            <Section>
              <Stack spacing="large" align="center">
                <Text variant="title2">Yhteystiedot</Text>

                <LeafDecoration />

                <Text variant="body">
                  Series A financing value proposition handshake
                  business-to-consumer social proof scrum project release lean
                  startup innovator seed money user experience.
                </Text>

                <Spacer size="xlarge" />

                <div>
                  <Stack axis="x" spacing="large">
                    <div>
                      <Stack spacing="small">
                        <Text variant="title3">Teemu Taskula</Text>
                        <Text variant="body">teemu.taskula@taitounited.fi</Text>
                        <Text variant="body">+358400848728</Text>
                      </Stack>
                    </div>

                    <div>
                      <Stack spacing="small">
                        <Text variant="title3">Milka Nissinen</Text>
                        <Text variant="body">milkamarianne@gmail.com</Text>
                        <Text variant="body">+358445758980</Text>
                      </Stack>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </Section>
          </Stack>
        </main>

        <Spacer size="xxxlarge" />

        <Footer>
          <Image
            src="/logo_white.png"
            alt="Teemun ja Milkan alkukirjaimet"
            width={120}
            height={120}
          />
        </Footer>
      </Content>
    </Page>
  );
}

function LeafDecoration() {
  return (
    <div>
      <Image src="/branch.png" alt="" width={150} height={70} />
    </div>
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

  "&::before": {
    content: `""`,
    display: "block",
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "0px",
    height: "500px",
    backgroundImage: 'url("leafs.png")',
    backgroundPosition: "top",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
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
  alignItems: "center",
  textAlign: "center",
});

const Nav = styled("nav", {
  width: "100%",
  maxWidth: `${CONTENT_WIDTH}px`,
  margingHorizontal: "auto",
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: "$secondary",
  padding: "$small",
});

const NavList = styled("ul", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const NavItem = styled("li", {});

const NavLink = styled("a", {
  typography: "$navLink",
  textDecoration: "none",
  color: "$primary",
});

const Footer = styled("footer", {
  width: "100%",
  minHeight: "300px",
  backgroundColor: "$secondary",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
