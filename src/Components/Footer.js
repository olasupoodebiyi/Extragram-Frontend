import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin: 50px 0px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link to="#">about us</Link>
      </ListItem>
      <ListItem>
        <Link to="#">support</Link>
      </ListItem>
      <ListItem>
        <Link to="#">press</Link>
      </ListItem>
      <ListItem>
        <Link to="#">api</Link>
      </ListItem>
      <ListItem>
        <Link to="#">jobs</Link>
      </ListItem>
      <ListItem>
        <Link to="#">privacy</Link>
      </ListItem>
      <ListItem>
        <Link to="#">terms</Link>
      </ListItem>
      <ListItem>
        <Link to="#">directory</Link>
      </ListItem>
      <ListItem>
        <Link to="#">profiles</Link>
      </ListItem>
      <ListItem>
        <Link to="#">hashtags</Link>
      </ListItem>
      <ListItem>
        <Link to="#">language</Link>
      </ListItem>
    </List>
    <Copyright> Extragram {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);
