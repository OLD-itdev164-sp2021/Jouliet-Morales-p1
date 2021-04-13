import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const Outer = styled.header`
  background: ${props => props.theme.header.backgroundColor};
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0px auto;
  maxwidth: 960px;
  padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
  margin: 0px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: purple;
  }
`
const StyledMenuLinks = styled(Link)`
  color: white;
  padding: 8px;
  text-decoration: none;
  &:visited {
    color: white;
  }
  &:hover {
    color: purple;
  }
`


const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
      <h4>
        <StyledMenuLinks to="/contact/"> Contact </StyledMenuLinks>
        <StyledMenuLinks to="/about/"> About </StyledMenuLinks>
        <StyledMenuLinks to="/using-typescript/"> Design </StyledMenuLinks>
        <StyledMenuLinks to="/page-2/"> Photos </StyledMenuLinks>
      </h4>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
