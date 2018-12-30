## To run

```shell
    npm i && npm start
```

## Improvements

1. Tests - Jest + Cypress - Unit + Integration
2. TS over plain JS
3. Distance convertion to km / m (for visual understanding for the user)
4. Maybe bundle `BE` code with `Webpack`
5. Winston - now just used a simple logger

## Maybe Questions

1. `.env` comitted cause nothing confidential (PORT)
2. `db` admin + password commited for `MLab DB` in `db.const.js` - also nothing confidential (will delete these credentials after a week)
3. In the `BE` duration, amounts are processed separate - this may add some minor time, but in this way there is a separation of concern (SRP), and the complexicity still stays O(n)

## Short Description

This project was bootstraped using `Lerna` as a monorepo and `React + Node (Koa)`. All data was prefilled from `S3` to `MLab` - `db/utils/prefill`, method was not made visible to others (manual prefill on demand).

1. BE - `Koa.js + Mongoose`. Cluster API for load on multiple processors.
2. FE - `React + Antd + BizCharts`. Would use `styled-components` for layout, but just took `react-blocks`.

--
And yes, I like minimalism time to time :)
