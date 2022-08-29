const FeasibilityModel = require("../models/FeasibilityModel");
const dbConnect = require("../utils/mongodb");

const options = {
	list: async function (req, res) {
		await dbConnect();
		FeasibilityModel.find((err, feasibilities) => {
			if (err) {
				return res.status(500).json({
					err,
				});
			}

			return res.status(200).json(feasibilities);
		});
	},
};

module.exports = options;
