import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  console.log(data)
  const { datoCmsPage } = data
  return (
    <Layout>
      <h1>{datoCmsPage.titreDeLaPage}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: datoCmsPage.texteBloc1.fields.html,
        }}
      />
      <h2>{datoCmsPage.titreBloc2}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: datoCmsPage.texteBloc2.fields.html,
        }}
      />
      <h2>{datoCmsPage.titreBloc3}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: datoCmsPage.texteBloc3.fields.html,
        }}
      ></p>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    datoCmsPage {
      titreDeLaPage
      texteBloc1: texteBloc1Node {
        fields {
          html
        }
      }
      titreBloc2
      texteBloc2: textBloc2Node {
        fields {
          html
        }
      }
      titreBloc3
      texteBloc3: texteBloc3Node {
        fields {
          html
        }
      }
    }
  }
`

export default IndexPage
