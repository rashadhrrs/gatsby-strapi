import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          image {
            url
          }
        }
      }
    }
  }
  `)
  return (
  <Layout>
    <div className="image-container">
      <div className="image-grid">
        {/* {data.allStrapiFilms.edges.map((image, key) => (
          <>
          {console.log(image)}
            <h1>{image.node.title}</h1>
            <img
            src={`http://localhost:1337${image.node.cover.url}`}
            />
             <Img
                key={key}
                className="image-item"
                fluid={image.node.cover.localFile.childImageSharp.fluid}
                // alt={image.node.title.split(".")[0]}
              />
          </> 
        ))} */}
        <ul>
         {data.allStrapiArticle.edges.map((document, key) => (
         <li key={document.node.id}>
           {console.log(document?.node?.image[0].url.split('/')[2])}
           <h2> 
             <Link to={`/${document.node.id}`}>
               {document.node.title}
             </Link> 
           </h2>
           <img src={`http://localhost:1337${document?.node?.image[0].url}`} alt={document.node.title.split(".")[0]} />
           <p>{document.node.content}</p>
         </li>
        ))}
        </ul>
      </div>
    </div>

  </Layout>
  )
         }

export default IndexPage
