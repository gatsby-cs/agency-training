import { graphql, PageProps } from 'gatsby'
import React, { useEffect } from 'react'

type BreweryProps = {
  brewery: {
    name: string
  }
}

const Brewery: React.FC<PageProps<BreweryProps>> = ({ data, serverData }) => {
  return (
    <>
      <div>Static:{data.brewery.name}</div>
      <div>SSR: {serverData.brewery.id}</div>
    </>
  )
}

export default Brewery

export const query = graphql`
  query BreweryPage($id: String!) {
    brewery(breweryId: { eq: $id }) {
      name
    }
  }
`

export const getServerData = async (context) => {
  const breweryId = context.pageContext.id

  const result = await fetch(
    `https://api.openbrewerydb.org/breweries/${breweryId}`
  )
  const json = await result.json()

  return {
    props: {
      brewery: json,
    },
  }
}
