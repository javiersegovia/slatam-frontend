import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Container from '@components/UI/Container'

const columns = [
  {
    title: 'Services',
    titleHref: '/',
    items: [
      {
        description: 'Account manager',
        href: '/',
      },
      {
        description: 'Brand identity',
        href: '/',
      },
      {
        description: 'Business ready to sell',
        href: '/',
      },
      {
        description: 'Advertising',
        href: '/',
      },
      {
        description: 'Other services',
        href: '/',
      },
    ],
  },
  {
    title: 'Company',
    titleHref: '/',
    items: [
      {
        description: 'About us',
        href: '/',
      },
      {
        description: 'Resources',
        href: '/',
      },
      {
        description: 'Roadmap',
        href: '/',
      },
    ],
  },
  {
    title: 'Documentation',
    titleHref: '/',
    items: [
      {
        description: 'Manual for suppliers',
        href: '/',
      },
      {
        description: 'Manual for sellers',
        href: '/',
      },
      {
        description: 'Brokers, retailers and affiliates',
        href: '/',
      },
      {
        description: 'Reward system',
        href: '/',
      },
      {
        description: 'Fees and pricing',
        href: '/',
      },
    ],
  },
  {
    title: 'Need help?',
    titleHref: '/',
    items: [
      {
        description: 'Help center',
        href: '/',
      },
      {
        description: 'contact@slatam.com',
        href: '/',
      },
    ],
  },
]

export const StyledFooter = styled.footer`
  background: white;
  border-top: 1px solid ${props => props.theme.palette.palelilac.dark};
  color: ${props => props.theme.palette.slategray.main};
  font-family: ${({ theme }) => theme.fonts.secondary};

  .StyledFooter__chooseLanguage {
    display: none;
    ${props => props.theme.breakpoints.down('md')} {
      display: flex;
      justify-content: center;
      margin: auto;
      padding-bottom: 60px;
    }
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  ${props => props.theme.breakpoints.up('lg')} {
    padding-left: 60px;
    padding-right: 60px;
  }

  ${props => props.theme.breakpoints.down('md')} {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    grid-gap: 60px;
  }
  ${props => props.theme.breakpoints.down('xs')} {
    grid-gap: 30px;
    grid-template-columns: 1fr;
    padding: 0 30px 30px;
    font-size: 1.125rem;
  }
`

const FooterColumn = styled.ul`
  margin: 0 60px;
  ${props => props.theme.breakpoints.down('md')} {
    margin: 0;
  }

  ${props => props.theme.breakpoints.down('xs')} {
    text-align: center;
  }

  .FooterColumn__listItem {
    margin: 5px 0;
  }

  .FooterColumn__title {
    text-transform: uppercase;
    margin: 0 0 20px;
    font-weight: 500;
    color: ${props => props.theme.palette.primary.light};
  }
`

const FooterCopyright = styled.div`
  border-top: 1px solid ${props => props.theme.palette.palelilac.dark};
  background: ${props => props.theme.gradients.primary.left};
  color: white;
  position: relative;

  ${props => props.theme.breakpoints.down('md')} {
    display: none;
  }

  .FooterCopyright__container {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }

  .FooterCopyright__languages {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
  }

  .FooterCopyright__languageButton.active {
    font-weight: 500;
  }

  .FooterCopyright__policies {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    margin-left: auto;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container limited className="StyledFooter__container">
        <div className="StyledFooter__chooseLanguage">
          {/* TODO: Add language dropdown for footer responsive */}
          Choose language
        </div>
        <FlexContainer>
          {columns.map(col => (
            <FooterColumn key={col.title}>
              <li className="FooterColumn__listItem FooterColumn__title">
                <a className="FooterColumn__listButton" href={col.titleHref}>
                  {col.title}
                </a>
              </li>
              {col.items.map(item => (
                <li
                  key={`${item.description}__${item.href}`}
                  className="FooterColumn__listItem"
                >
                  <Link as="li" href={item.href}>
                    <a className="FooterColumn__listButton">
                      {item.description}
                    </a>
                  </Link>
                </li>
              ))}
            </FooterColumn>
          ))}
        </FlexContainer>
      </Container>
      <FooterCopyright>
        <Container limited className="FooterCopyright__container">
          <div className="FooterCopyright__languages">
            <button
              type="button"
              className="FooterCopyright__languageButton active"
            >
              English
            </button>
            <button type="button" className="FooterCopyright__languageButton">
              Español
            </button>
          </div>
          <ul className="FooterCopyright__policies">
            <li className="FooterCopyright__listItem">
              <a href="/" className="FooterCopyright__listButton">
                Terms & conditions
              </a>
            </li>
            <li className="FooterCopyright__listItem">
              <a href="/" className="FooterCopyright__listButton">
                Privacy policies
              </a>
            </li>
          </ul>
        </Container>
      </FooterCopyright>
    </StyledFooter>
  )
}

Footer.propTypes = {}

export default Footer
