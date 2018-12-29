import moment from "moment";

const DEFAULT_MODES = ["duration", "amount"];
const DEFAULT_DATES = {
  start: moment.utc("2012-12-25"),
  end: moment.utc("2018-12-25"),
};

const START_DATE_INDEX = 0;
const END_DATE_INDEX = 1;
const DEFAULT_FILTER = "duration";

export { DEFAULT_DATES, DEFAULT_MODES, START_DATE_INDEX, END_DATE_INDEX, DEFAULT_FILTER };
