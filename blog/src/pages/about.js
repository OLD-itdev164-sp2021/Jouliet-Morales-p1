import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const About = ({ data }) => {
  const { name, company, address } = data.site.siteMetadata.contact
  return (
    <Layout>
      <SEO title="About" />
      <h1> About Us</h1>
      <p>{`${company} was started by ${name} in 2021.`}</p>
      <p>{`At ${company} we just make blogs!`}</p>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`
