import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const { datoCmsPage } = data
  console.log(data)
  return (
    <Layout>
      <h1>{datoCmsPage.titreDeLaPage}</h1>
      <p>
        <ReactMarkdown>{datoCmsPage.texteBloc1}</ReactMarkdown>
      </p>
      <h2>{datoCmsPage.titreBloc2}</h2>
      <p>
        <ReactMarkdown>{datoCmsPage.texteBloc2}</ReactMarkdown>
      </p>
      <h2>{datoCmsPage.titreBloc3}</h2>
      <p>
        <ReactMarkdown>{datoCmsPage.texteBloc3}</ReactMarkdown>
      </p>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    datoCmsPage {
      titreDeLaPage
      titreBloc1
      texteBloc1
      titreBloc2
      texteBloc2
      titreBloc3
      texteBloc3
    }
  }
`

export default IndexPage
