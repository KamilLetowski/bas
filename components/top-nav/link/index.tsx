import React from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

type Props = {
  href: string;
  activeClassName?: string;
  className?: string;
  as?: string
}

const Link: React.FC<Props> = ({ children, activeClassName = 'active', className = "link", ...props }) => {
  const { asPath } = useRouter()

  const classNameOutput =
    asPath === props.href || asPath === props.as
      ? `${className} ${activeClassName}`.trim()
      : className

  return (
    <NextLink {...props}>
      <a className={classNameOutput}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link;
