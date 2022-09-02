import { getFormattedDate, getFormattedTime } from "./utils/functions";

// api base url
const baseUrl = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";

const paginationLimit = 5;

// headers for table view
const tableHeaders = ["Car 1", "Car 2", "Crash Date", "Crash Time"];

// mapping api fields to custom headers for data in cards
const cardDataMap = (data) => [
  {
    header: "Car 1: ",
    content: data.vehicle_type_code1 || "-",
  },
  {
    header: "Car 2: ",
    content: data.vehicle_type_code2 || "-",
  },
  {
    header: "Crash Date: ",
    content: getFormattedDate(data.crash_date),
  },
  {
    header: "Crash Time: ",
    content: data.crash_time ? getFormattedTime(data.crash_time) : "-",
  },
];

// mapping api fields to custom headers for data in details page
const detailsDataMap = (data) => [
  ...cardDataMap(data),
  {
    header: "Borough: ",
    content: data.borough || "-",
  },
  {
    header: "Zip code: ",
    content: data.zip_code || "-",
  },
  {
    header: "Location: ",
    content: data.location ? `(${data.latitude}, ${data.longitude})` : "-",
  },
  {
    header: "On street name: ",
    content: data.on_street_name || "-",
  },
  {
    header: "Off street name: ",
    content: data.off_street_name || "-",
  },
  {
    header: "Cross street name: ",
    content: data.cross_street_name || "-",
  },
  {
    header: "Number of persons injured: ",
    content: data.number_of_persons_injured,
  },
  {
    header: "Number of persons killed: ",
    content: data.number_of_persons_killed,
  },
  {
    header: "Number of pedestrians injured: ",
    content: data.number_of_pedestrians_injured,
  },
  {
    header: "Number of pedestrians killed: ",
    content: data.number_of_pedestrians_killed,
  },
  {
    header: "Number of cyclists injured: ",
    content: data.number_of_cyclist_injured,
  },
  {
    header: "Number of cyclists killed: ",
    content: data.number_of_cyclist_killed,
  },
  {
    header: "Number of motorists injured: ",
    content: data.number_of_motorist_injured,
  },
  {
    header: "Number of motorists killed: ",
    content: data.number_of_motorist_killed,
  },
  {
    header: "Contributing factor vehicle 1: ",
    content: data.contributing_factor_vehicle_1 || "-",
  },
  {
    header: "Contributing factor vehicle 2: ",
    content: data.contributing_factor_vehicle_2 || "-",
  },
  {
    header: "Contributing factor vehicle 3: ",
    content: data.contributing_factor_vehicle_2 || "-",
  },
  {
    header: "Contributing factor vehicle 4: ",
    content: data.contributing_factor_vehicle_2 || "-",
  },
  {
    header: "Contributing factor vehicle 5: ",
    content: data.contributing_factor_vehicle_2 || "-",
  },
];

export { baseUrl, cardDataMap, detailsDataMap, paginationLimit, tableHeaders };
