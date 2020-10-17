# Prerequisites

NPM, Yarn, NodeJS (nvm).

# Stack

1. Back: **GraphQLHub** --> Transform *Hacker News* REST API to a GraphQL API.
2. Front: **GatsbyJS** with source connector to *GraphQLHub Hacker News Schema*. (To be released Open Source).

# Instructions

1. Clone this repo:  `git clone git@github.com:sebastienfi/hacker-news-clone.git`
2. Bootstrap: `cd front && yarn bootstrap`
3. Launch: `yarn start` (while in *front* directory)

# To be done

- [x] Transform *Hacker News* REST API to GraphQL
- [x] Code Gatsby Source Plugin to feed gql hn schema.
- [x] Scrap hn UI
- [x] Page *Front*
  - [x] Display comments
- [x] Page *News* (`/newest`)
  - [ ] Display comments
- [ ] Page *Login* (`/login`)
- [ ] Page lastest comments (`/newcomments`)
- [ ] Page *Ask* (`/ask`)
- [ ] Page *Show* (`/show`)
- [ ] Page *Jobs* (`/jobs`)
- [ ] Page *Submit* (create a new story) (`/submit`)
- [ ] Up vote a story or a comment
- [ ] Leave a comment
- [ ] PWA
  - [x] Manifest
  - [ ] Offline mode
- [ ] Testing on Desktop and Mobile

