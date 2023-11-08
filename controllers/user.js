const user = require("../models/user");


const getAllUser = async (req, res) => {
    const myData = await user.find();
    res.status(200).json({ myData });
};


const getUser = async (req, res) => {

    const myData = await user.find({ age: "45" }) //it is a hardcore searching method
    res.status(200).json({ myData });
};
const getuser = async (req, res) => {

    const myData = await user.find(req.query) //it is a dynamic searching method
    res.status(200).json({ myData });
};
const filter = async (req, res) => {
    const { fname, age, sort, select, page } = req.query;
    const queryObject = {};
    if (fname) {
        queryObject.fname = { $regex: fname, $options: "i" };
    }
    if (age) {
        queryObject.age = age;
    }
    let apiData = user.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }
    if (page) {
        let pages = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 3;
        let skip = (pages - 1) * limit;
        apiData = apiData.skip(skip).limit(limit);
    }
    console.log(req.query);

    const myData = await apiData
    res.status(200).json({ myData });
};

module.exports = { getAllUser, getUser, getuser, filter };