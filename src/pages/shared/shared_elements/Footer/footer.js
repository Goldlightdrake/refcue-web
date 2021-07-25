import React from "react";
import Footer from "./components/footer";
import Icon from "./components/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Szybkie odnośniki</Footer.Title>
            <Footer.Link href="https://refcue.pl/polityka-prywatnosci">
              Polityka prywatności
            </Footer.Link>
            <Footer.Link href="#">Regulamin</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Kontakt z nami</Footer.Title>
            {/* <Footer.Link href="tel:+48000000000">
              <Icon className="fas fa-phone" />
              000-000-000
            </Footer.Link> */}
            <Footer.Link href="mailto: kontakt@refcue.pl">
              <Icon className="fas fa-envelope" />
              kontakt@refcue.pl
            </Footer.Link>
            {/* <Footer.Link href="https://goo.gl/maps/BaAgTnbdQstETLD29">
              <Icon className="fas fa-map-pin" />
              ul. Ulicowa 22, 00-000 Miejscowa
            </Footer.Link> */}
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Znajdz nas tutaj!</Footer.Title>
            <Footer.Link href="https://www.facebook.com/RefCue">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
