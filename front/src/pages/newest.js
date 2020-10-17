import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import StoryNewsItem from "../components/story-news-item"

class Index extends React.Component {
  render() {
    const { allHnNewStory } = this.props.data
    return (
      <Layout>
        <table
          className="itemlist"
          cellPadding={0}
          cellSpacing={0}
          style={{ border: 0 }}
        >
          <tbody>
            {allHnNewStory.edges.map(({ node }) => (
              <StoryNewsItem key={node.id} story={node} />
            ))}
            <tr className="morespace" style={{ height: `10px` }} />
            <tr>
              <td style={{ paddingLeft: 36 }} className="title" colSpan={2}>
                <a href="/page/2/" className="morelink" rel="nofollow">
                  More
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allHnNewStory(sort: { fields: [order] }) {
      edges {
        node {
          ...Story_News_item
        }
      }
    }
  }
`
