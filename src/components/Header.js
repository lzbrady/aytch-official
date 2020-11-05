import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from 'styled-components'

import { colors } from 'BaseTheme'

export default function Header({ scrollPosition }) {
  return (
    <Container>
      <Link to="/">
        <h1>AYTCH</h1>
      </Link>

      <Menu>
        <MenuItemAnchor to="/#music">Music</MenuItemAnchor>
        <MenuItemAnchor to="/#video">Videos</MenuItemAnchor>
        <MenuItemAnchor to="/#production">Production</MenuItemAnchor>
        <MenuItemLink to="/beats">Beats</MenuItemLink>
        <MenuItemLink to="/contact">Contact</MenuItemLink>
      </Menu>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 80px;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  background-color: ${colors.primaryDark};
  ${'' /* background-color: ${props =>
    colors.alpha.primaryDark.replace('x', props.scrollPosition / 500)}; */}
`

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const MenuItemAnchor = styled(props => <AnchorLink {...props} />)`
  width: 80px;
  margin: 4px 20px;
  text-align: center;
  border-radius: 5px;
  padding: 6px 0px;
  color: ${colors.primaryLight};
  text-decoration: none;
`

const MenuItemLink = styled(props => <Link {...props} />)`
  width: 80px;
  margin: 4px 20px;
  width: 80px;
  text-align: center;
  border-radius: 5px;
  padding: 6px 0px;
  color: ${colors.primaryLight};
  text-decoration: none;
`
