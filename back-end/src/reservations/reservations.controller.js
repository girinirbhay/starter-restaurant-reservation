/**
 * List handler for reservation resources
 */

const reservationsService = require("./reservations.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")
const hasProperties = require("../errors/hasProperties")

const hasCorrectProperties = hasProperties(
  "first_name",
  "last_name",
  "mobile_number",
  "reservation_date",
  "revervation_time",
  "people"
)

async function list(req, res) {
  const date = req.query.date;
  const mobile_number = req.query.number;
  const data = await (date
    ? reservationsService.list(date)
    : reservationsService.search(mobile_number));
  res.json({ data });
}

module.exports = {
  list,
};
