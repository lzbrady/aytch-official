import React from 'react'
import styled from 'styled-components'

export default function Header({ scrollPosition }) {
  return (
    <Container scrollPosition={scrollPosition}>
      <h1>AYTCH</h1>
      <Menu>
        <MenuItem href="#music">Music</MenuItem>
        <MenuItem href="#music">Videos</MenuItem>
        <MenuItem href="#music">Production</MenuItem>
        <MenuItem href="#music">Beats</MenuItem>
        <MenuItem href="#music">Contact</MenuItem>
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
  background-color: ${props =>
    `rgba(255, 255, 255, ${props.scrollPosition / 500})`};
`

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const MenuItem = styled.a`
  width: 80px;
  margin: 4px 20px;
  width: 80px;
  text-align: center;
  border-radius: 5px;
  padding: 6px 0px;
  color: black;
  text-decoration: none;
`
