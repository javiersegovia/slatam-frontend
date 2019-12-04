import styled from 'styled-components'
import PropTypes from 'prop-types'

const Styled = styled.div`
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  ${props => props.theme.breakpoint.down('sm')} {
    text-align: center;
    margin-bottom: 15px;
  }
  ${props =>
    props.isMenuLink &&
    `
    margin: 10px 0;
  `}
  .Title {
    font-family: ${props => props.theme.font.title};
    font-size: 48px;
    z-index: 1;
    position: relative;
    display: inline-block;
    margin: 0;
    &:after {
      content: '';
      background: ${props => props.theme.color.yellow};
      z-index: -1;
      position: absolute;
      width: 70%;
      height: 25%;
      top: 50%;
      left: 0;
      margin-left: 50%;
    }
  }
  h3.Title {
    font-size: 26px;
  }
  a.Title {
    font-size: 34px;
  }
`

const Title = ({ children, as, href, ...props }) => {
  const Tag = as || 'h2'
  return (
    <Styled {...props}>
      <Tag className="Title" href={href}>
        {children}
      </Tag>
    </Styled>
  )
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  href: PropTypes.string
}

export default Title
