import React from "react"
import { Link, graphql } from "gatsby"
import StoryItemView from "./story-item-view"

class StoryTopItem extends React.Component {
  render() {
    const story = this.props.story
    return <StoryItemView story={story} />
  }
}

export default StoryTopItem

export const storyFragment = graphql`
  fragment Story_Top_item on HNTopStory {
    id
    title
    score
    order
    domain
    url
    by
    descendants
    timeISO(fromNow: true)
  }
`
