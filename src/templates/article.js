import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>
    {/* <Img fixed={data.strapiArticle.image.childImageSharp.fixed}/> */}
    <img 
        src={`http://localhost:1337${data.strapiArticle.image[0].url}`} alt={data.strapiArticle.title.split(".")[0]} />
    <p>{data.strapiArticle.content}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      content
      image {
          url
        }
      author {
        id
        username
      }
    }
  }
`