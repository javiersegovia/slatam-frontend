import React from 'react'
import PropTypes from 'prop-types'
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
  padding: 60px 0;
  background: white;
  border-top: 1px solid ${props => props.theme.palette.palelilac.dark};
  color: ${props => props.theme.palette.primary.light};
  color: #1642a7;
  font-size: 1.125rem;
`

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const FooterColumn = styled.ul``

const Footer = props => {
  return (
    <StyledFooter>
      <GridContainer limited>
        {columns.map(col => (
          <FooterColumn>
            <li className="FooterColumn__title FooterColumn__listItem">
              <a className=" FooterColumn__listButton" href={col.titleHref}>
                {col.title}
              </a>
            </li>
            {col.items.map(item => (
              <li className="FooterColumn__listItem">
                <Link as="li">
                  <a className="FooterColumn__listButton" href={item.href}>
                    {item.description}
                  </a>
                </Link>
              </li>
            ))}
          </FooterColumn>
        ))}
      </GridContainer>
    </StyledFooter>
  )
}

Footer.propTypes = {}

export default Footer
