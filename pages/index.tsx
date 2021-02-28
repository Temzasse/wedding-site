import Head from "next/head";
import Image from "next/image";
import { styled } from "@styles/styled";
import { Text, Button, Stack, Spacer } from "@components/common";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Teemu & Milka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Header>
          <Stack align="center" spacing="xlarge">
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
                  <NavLink href="#ilmottaudu">Ilmottaudu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#ilmottaudu">Reittiohjeet</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#ilmottaudu">Lisätietoja</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#ilmottaudu">Yhteistiedot</NavLink>
                </NavItem>
              </NavList>
            </Nav>
          </Stack>
        </Header>

        <Spacer size="xxlarge" />

        <main>
          <Section>
            <Stack spacing="xlarge" align="center">
              <Stack spacing="none" align="center">
                <Text variant="title2">Tervetuloa</Text>

                <Text variant="body">
                  Series A financing value proposition handshake
                  business-to-consumer social proof scrum project release lean
                  startup innovator seed money user experience. Partner network
                  vesting period low hanging fruit deployment advisor equity
                  backing. Partner network graphical user interface virality
                  disruptive stock.
                </Text>
              </Stack>

              <Button>Ilmoittaudu</Button>
            </Stack>
          </Section>

          <Section>
            <Text variant="title2">Reittiohjeet</Text>
          </Section>

          <Section>
            <Text variant="title2">Lisätietoja</Text>
          </Section>

          <Section>
            <Text variant="title2">Yhteistiedot</Text>
          </Section>
        </main>

        <footer>Footer here</footer>
      </Content>
    </Page>
  );
}

const PAGE_WIDTH = 1400;
const CONTENT_WIDTH = 800;

const Page = styled("div", {
  width: "100%",
});

const Content = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: `${PAGE_WIDTH}px`,
  margingHorizontal: "auto",
  padding: "$xlarge",
  paddingTop: "500px",
  backgroundColor: "#fff",

  "&::before": {
    content: `""`,
    display: "block",
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "2000px",
    height: "2000px",
    backgroundImage: 'url("decoration_1.png")',
    backgroundPosition: "0px 0px",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    transform: "translate(-18%, -65%) rotate(10deg)",
    filter: "brightness(0.8)",
  },

  // "&::before": {
  //   content: `""`,
  //   display: "block",
  //   position: "absolute",
  //   top: "0px",
  //   left: "0px",
  //   width: "1200px",
  //   height: "1200px",
  //   backgroundImage: 'url("decoration_1.png")',
  //   backgroundPosition: "0px 0px",
  //   backgroundSize: "100%",
  //   backgroundRepeat: "no-repeat",
  //   transform: "translate(-55%, -55%) rotate(-30deg)",
  // },
  // "&::after": {
  //   content: `""`,
  //   display: "block",
  //   position: "absolute",
  //   top: "0px",
  //   right: "0px",
  //   width: "1200px",
  //   height: "1200px",
  //   backgroundImage: 'url("decoration_1.png")',
  //   backgroundPosition: "0px 0px",
  //   backgroundSize: "100%",
  //   backgroundRepeat: "no-repeat",
  //   transform: "translate(55%, -60%) rotate(20deg)",
  // },
});

const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Section = styled("section", {
  minHeight: "50vh",
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
  borderColor: "#eee",
  padding: "$small 0px",
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
