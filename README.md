<a href="https://ibm.biz/gramps-graphql"><img src="https://gramps-graphql.github.io/gramps-express/assets/img/gramps-banner.png" alt="GrAMPS · An easier way to manage the data sources powering your GraphQL server" width="450"></a>

# GrAMPS GraphQL Data Source for [xkcd](https://xkcd.com)
[![license](https://img.shields.io/npm/l/@gramps/data-source-xkcd.svg)](https://github.com/gramps-graphql/data-source-xkcd/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@gramps/data-source-xkcd.svg?style=flat)](https://www.npmjs.com/package/@gramps/data-source-xkcd) [![Build Status](https://travis-ci.org/gramps-graphql/data-source-xkcd.svg?branch=master)](https://travis-ci.org/gramps-graphql/data-source-xkcd) [![Maintainability](https://api.codeclimate.com/v1/badges/ac264833fac1fbd1afe0/maintainability)](https://codeclimate.com/github/gramps-graphql/data-source-xkcd/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ac264833fac1fbd1afe0/test_coverage)](https://codeclimate.com/github/gramps-graphql/data-source-xkcd/test_coverage) [![Greenkeeper badge](https://badges.greenkeeper.io/gramps-graphql/data-source-xkcd.svg)](https://greenkeeper.io/)

Load the latest [xkcd](https://xkcd.com) comic, or look one up by its ID.

This is a [GrAMPS](https://ibm.biz/gramps-graphql) data source for GraphQL.

## Example Queries

To get all available fields for this data source, try out these two queries in GraphiQL. (See [the quickstart](#quickstart) for details on starting GraphiQL.)

```graphql
query getLatestComic {
  getLatestComic {
    ...ComicFields
  }
}

query getComicById($id: ID!) {
  getComicById(id: $id) {
    ...ComicFields
  }
}

fragment ComicFields on XKCD_Comic {
  num
  title
  safe_title
  img
  alt
  transcript
  year
  month
  day
  link
  news
}
```

Use the following arguments:

```json
{
  "id": 1900
}
```

## Quickstart

```sh
# Clone the repo
git clone git@github.com:gramps-graphql/data-source-xkcd.git

# Move into it
cd data-source-xkcd/

# Install dependencies
yarn install
```

### To Develop with Mock Data

Start the app with the following command:

```sh
# Develop with mock data
yarn dev:mock-data
```

Open the URL displayed in your console to see GraphiQL.

### To Develop with Live Data

Once you’ve got your data source configured to load live data, you can enable live data in development:

```sh
# Develop with live data
yarn dev
```

Open the URL displayed in your console to see GraphiQL.

### Notes for Developers

Currently, there is no watch capability (PRs welcome!), so the service needs to be stopped (`control` + `C`) and restarted (`yarn [dev:mock-data|dev]`) to reflect new changes to the data source.
