import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import "@fontsource/noto-serif"
import "@fontsource/noto-serif/400-italic.css"
import "@fontsource/noto-serif/700.css"
import "@fontsource/kaushan-script"

const IndexPage = ({ data }) => {
  const { dato } = data
  console.log(data)
  return (
    <Layout>
      <h1>{dato.titreDeLaPage}</h1>
      <p>
        <ReactMarkdown>{dato.texteBloc1}</ReactMarkdown>
      </p>
      <h2>{dato.titreBloc2}</h2>
      <p>
        <ReactMarkdown>{dato.texteBloc2}</ReactMarkdown>
      </p>
      <h2>{dato.titreBloc3}</h2>
      <p>
        <ReactMarkdown>{dato.texteBloc3}</ReactMarkdown>
      </p>
      <p>
        <h2>Tarifs</h2>
        <ul>
          <li>Prix 1 : {dato.prix1} €</li>
          <li>Prix 2 : {dato.prix2} €</li>
          <li>Prix 3 : {dato.prix3} €</li>
          <li>Prix 4 : {dato.prix4} €</li>
        </ul>
      </p>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    dato: datoCmsPage {
      titreDeLaPage
      titreBloc1
      texteBloc1
      titreBloc2
      texteBloc2
      titreBloc3
      texteBloc3
      prix1
      prix2
      prix3
      prix4
    }
  }
`

export default IndexPage
