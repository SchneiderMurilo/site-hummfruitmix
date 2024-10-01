import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {
  NavLink,
  Extra,
  LogoContainer,
  FooterContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="45px" height="45px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="humm-comprida.webp"
                  aria-label="homepage"
                  width="150px"
                  height="52px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.instagram.com/hummfruitmix/"
                src="instagram.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra >
    </>
  );
};

export default withTranslation()(Footer);
