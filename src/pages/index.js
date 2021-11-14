import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"
import Layout from "../components/layout"
import "@fontsource/noto-serif"
import "@fontsource/noto-serif/400-italic.css"
import "@fontsource/noto-serif/700.css"
import "@fontsource/kaushan-script"
import "./app.css"

const IndexPage = ({ data }) => {
  const { dato, gallery } = data

  return (
    <Layout>
      <section>
        <h1 style={{ fontSize: "2rem" }}>{dato.titreDeLaPage}</h1>
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
      </section>

      <section>
        <h2>Tarifs</h2>
        <table style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>Prix 1</th>
              <th>Prix 2</th>
              <th>Prix 3</th>
              <th>Prix 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dato.prix1}</td>
              <td>{dato.prix2}</td>
              <td>{dato.prix3}</td>
              <td>{dato.prix4}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Gallerie</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {gallery.photos.map(photo => (
            <Img
              style={{
                width: "calc(33.33% - 0.25rem)",
                marginBottom: "0.5rem",
              }}
              fluid={photo.fluid}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    dato: datoCmsPage {
      titreDeLaPage
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
    gallery: datoCmsGalerie {
      photos {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default IndexPage
