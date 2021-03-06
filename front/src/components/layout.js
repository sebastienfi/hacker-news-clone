import React from "react"
import { Link } from "gatsby"

import "../css/news.css"
import y18Gif from "../images/y18.gif"
import sGif from "../images/s.gif"

class Layout extends React.Component {
  render() {
    return (
      <center>
        <table
          id="hnmain"
          cellPadding="0"
          cellSpacing="0"
          width="85%"
          style={{
            borderWidth: 0,
            backgroundColor: `#f6f6ef`,
          }}
        >
          <tbody>
            <tr>
              <td style={{ backgroundColor: `#ff6600` }}>
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  width="100%"
                  style={{
                    padding: `2px`,
                    border: `0`,
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: `18px`, paddingRight: `4px` }}>
                        <a href="https://news.ycombinator.com">
                          <img
                            src={y18Gif}
                            width="18"
                            height="18"
                            style={{ border: `1px white solid` }}
                            alt="logo"
                          />
                        </a>
                      </td>
                      <td style={{ lineHeight: `12pt`, height: `10px` }}>
                        <span className="pagetop">
                          <b className="hnname">
                            <Link to="/">Hacker News </Link>
                          </b>
                          <Link to="/newest">new</Link> |{" "}
                          <a href="front">past</a> |{" "}
                          <a href="newcomments">comments</a> |{" "}
                          <a href="ask">ask</a> | <a href="show">show</a> |{" "}
                          <a href="jobs">jobs</a> | <a href="submit">submit</a>{" "}
                        </span>
                      </td>
                      <td style={{ textAlign: `right`, paddingRight: `4px` }}>
                        <span className="pagetop">
                          <a href="login?goto=news">login</a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr style={{ height: `10px` }} />
            <tr>
              <td>{this.props.children}</td>
            </tr>
            <tr>
              <td>
                <img src={sGif} height="10" width="0" />
                <table width="100%" cellSpacing="0" cellPadding="1">
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: `#ff6600` }} />
                    </tr>
                  </tbody>
                </table>
                <br />
                <center>
                  <span className="yclinks">
                    <a href="newsguidelines.html">Guidelines</a>|
                    <a href="newsfaq.html">FAQ</a>|
                    <a href="mailto:hn@ycombinator.com">Support</a>|
                    <a href="https://github.com/HackerNews/API">API</a>|
                    <a href="security.html">Security</a>|
                    <a href="lists">Lists</a>|
                    <a href="bookmarklet.html">Bookmarklet</a>|
                    <a href="dmca.html">DMCA</a>|
                    <a href="http://www.ycombinator.com/apply/">Apply to YC</a>|
                    <a href="mailto:hn@ycombinator.com">Contact</a>
                  </span>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    )
  }
}

export default Layout
