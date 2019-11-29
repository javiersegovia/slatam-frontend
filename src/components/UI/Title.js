import styled from 'styled-components'
import PropTypes from 'prop-types'

const Styled = styled.div`
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  ${props => props.theme.breakpoint.down('sm')} {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  ${props =>
    props.isMenuLink &&
    `
    margin: 1rem 0;
  `}
  .Title {
    font-family: ${props => props.theme.font.title};
    font-size: 4.8rem;
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
    font-size: 2.6rem;
  }
  a.Title {
    font-size: 3.4rem;
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
