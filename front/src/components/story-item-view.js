import React from "react"
import { Link } from "gatsby"

class StoryItemView extends React.Component {
  render() {
    const story = this.props.story
    return (
      <>
        <tr className="athing" id={story.id}>
          <td
            style={{
              textAlign: `right`,
              verticalAlign: `top`,
            }}
            className="title"
          >
            <span className="rank">{story.order}.</span>
          </td>
          {
            // <td
            //   style={{
            //     verticalAlign: `top`,
            //   }}
            //   className="votelinks"
            // >
            //   <center>
            //     <a
            //       id={`up_${story.id}`}
            //       onClick={() =>
            //         console.log(`API => vote?id=${story.id}&amp;how=up`)
            //       }
            //     >
            //       <div className="votearrow" title="upvote"></div>
            //     </a>
            //   </center>
            // </td>
          }
          <td className="title">
            <a href={story.url} className="storylink">
              {story.title}
            </a>
            <span className="sitebit comhead">
              (<span className="sitestr">{story.domain}</span>)
            </span>
          </td>
        </tr>
        <tr>
          <td />
          <td className="subtext">
            <span className="score" id={`score_${story.id}`}>
              {story.score} points
            </span>{" "}
            by{" "}
            <a href="" className="hnuser">
              {story.by}
            </a>
            <span className="age">
              <Link to={`/item/${story.id}/`}>{story.timeISO}</Link>
            </span>
            <span id={`unv_${story.id}`} /> |{" "}
            <Link to={`/item/${story.id}/`}>
              {story.descendants ? story.descendants : 0} comments
            </Link>
          </td>
        </tr>
        <tr className="spacer" style={{ height: `5px` }} />
      </>
    )
  }
}

export default StoryItemView
