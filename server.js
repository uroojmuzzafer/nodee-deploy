const path = require("path");
var express = require("express");
const hbs = require("hbs");

var app = express();
const path1 = path.join(__dirname, "./templates/views");
const path2 = path.join(__dirname, "./templates/partial");
const port=process.env.PORT || 3000;
app.set("view engine", "hbs");
app.set("views", path1);

hbs.registerPartials(path2);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/datesheet", (req, res) => {
    res.render("datesheet.hbs",{
        date1: "05-04-2020",
        date2: "06-04-2020",
        date3: "07-04-2020",
        date4: "08-04-2020",
        date5: "09-04-2020",
        day1: "Monday",
        day2: "Tuesday",
        day3: "Wednesday",
        day4: "Thursday",
        day5: "Friday",
        courseCode1: "Cap919",
        courseCode2: "Cap918",
        courseCode3: "Cap441",
        courseCode4: "Cap439",
        courseCode5: "Mkt906",
        roomNo1: "38-605C",
        roomNo2: "38-605A",
        roomNo3: "34-709",
        roomNo4: "36-605C",
        roomNo5: "55-512C",
        time1: "12:30 PM",
        time2: "03:00 PM",
        time3: "12:30 PM",
        time4: "03:30 PM",
        time5: "02:00 PM",
    });
  });

  app.get("/result", (req, res) => {
    res.render("result.hbs",{
        courseCode1: "Cap182",
        courseCode2: "Cap183",
        courseCode3: "Cap440",
        courseCode4: "Cap123",
        courseCode5: "Mkt321",
        marks1: "92",
        marks2: "85",
        marks3: "79",
        marks4: "95",
        marks5: "80",
        grade1: "A+",
        grade2: "B+",
        grade3: "B",
        grade4: "O",
        grade5: "B",
    });
  });

  app.get("/discrepency", (req, res) => {
    res.render("discrepency.hbs",{
        courseCode1: "Cap182",
        courseCode2: "Cap183",
        courseCode3: "Cap440",
        courseCode4: "Cap123",
        courseCode5: "Mkt321",
        discrepency1: "Question no. 5,6",
        discrepency2: "Question no. 2,7",
        discrepency3: "Question no. 5,6,9",
        discrepency4: "Question no. 3",
        discrepency5: "Question no. 7,9",
        status1: "Pending...",
        status2: "Pending...",
        status3: "Close",
        status4: "Pending...",
        status5: "Close",
    });
    });

    app.get("/conduct", (req, res) => {
        res.render("conduct.hbs",{
            date1: "05-04-2020",
            date2: "06-04-2020",
            date3: "07-04-2020",
            date4: "08-04-2020",
            date5: "09-04-2020",
            day1: "Monday",
            day2: "Tuesday",
            day3: "Wednesday",
            day4: "Thursday",
            day5: "Friday",
            courseCode1: "Cap919",
            courseCode2: "Cap918",
            courseCode3: "Cap441",
            courseCode4: "Cap439",
            courseCode5: "Mkt906",
            roomNo1: "38-605C",
            roomNo2: "38-605A",
            roomNo3: "34-709",
            roomNo4: "36-605C",
            roomNo5: "55-512C",
            time1: "12:30 PM",
            time2: "03:00 PM",
            time3: "12:30 PM",
            time4: "03:30 PM",
            time5: "02:00 PM",
        });
      });

app.listen(port, () =>{
  console.log(`Server running succesfully at ${port}`);
});
