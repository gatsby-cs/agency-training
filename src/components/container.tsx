import React from 'react'

interface DataProps<T extends React.ElementType> {
  as?: T
  children: React.ReactNode
}

// Typing the 'as' prop:
// https://itnext.io/react-polymorphic-components-with-typescript-f7ce72ea7af2

const Container = <T extends React.ElementType = 'div'>({
  children,
  as,
}: DataProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof DataProps<T>>) => {
  const Tag = as || 'div'

  return (
    <Tag
      style={{
        maxWidth: 'var(--size-max-width)',
        margin: '0 auto',
        padding: 'var(--space-2xl) var(--size-gutter)',
      }}
    >
      {children}
    </Tag>
  )
}

export default Container
