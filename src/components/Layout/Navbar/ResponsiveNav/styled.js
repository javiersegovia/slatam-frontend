import styled from 'styled-components'

export const StyledResponsiveNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 65px;
  background: ${props => props.theme.palette.gray.extralight};
  border-top: 1.5px solid ${props => props.theme.palette.gray.light};
  z-index: ${props => props.theme.zIndex.appBar};
  padding: 0px 15px 10px;
  display: none;

  ${props => props.theme.breakpoints.down('md')} {
    display: block;
  }

  .ResponsiveNav__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
    padding: 0;
    margin: 0;
    align-items: flex-end;
  }

  .ResponsiveNav__listItem {
    text-align: center;
  }

  .ResponsiveNav__listButton {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    cursor: pointer;

    .MuiSvgIcon-root {
      font-size: 1.75rem;
    }

    span {
      font-size: 0.75rem;
    }
  }
`

export const ResponsiveNavPadding = styled.div`
  padding-top: 65px;
  display: none;

  ${props => props.theme.breakpoints.down('md')} {
    display: block;
  }
`
