## To run

```shell
    npm i && npm start
```

## Improvements

1. Tests - Jest + Cypress - Unit + Integration
2. TS over plain JS
3. Distance convertion to km / m (for visual understanding for the user)

## Maybe Questions

1. `.env` comitted cause nothing confidential (PORT)
2. `db` admin + password commited for `MLab DB` in `db.const.js` - also nothing confidential (will delete these credentials after a week)

## Short Description

This project was bootstraped using `Lerna` as a monorepo and `React + Node (Koa)`. All data was prefilled from `S3` to `MLab` - `db/utils/prefill`, method was not made visible to others (manual prefill on demand).

BE - `Koa.js + Mongoose`. Cluster API for load on multiple processors.
FE - `React + Antd + BizCharts`. Would use `styled-components` for layout, but just took `react-blocks`.

--
And yes, I like minimalism time to time :)