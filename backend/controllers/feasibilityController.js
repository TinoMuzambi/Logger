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

    show: async function (req, res) {
        const id = req.params.id

        FeasibilityModel.findOne({_id: id}, async (err, feasibility) => {
            if (err) {
                return res.status(500).json({err})
            }

            if (!tutorInfo) {
                return res.status(404).json({
                    message: "No such feasibility"
                })
            }

            return res.status(200).json({feasibility})
        })
    },

    create: async function (req, res) {
        const feasibility = new FeasibilityModel(req.body)

        feasibility.save((err, feasibility) => {
            if (err) {
                return res.status(500).json({err})
            }

            return res.status(201).json(feasibility)
        })
    },

    update: async function (req, res) {
        const id = req.params.id;

        FeasibilityModel.findOne({_id: id}, (err, feasibility) => {
            if (err) {
                return res.status(500).json({err})
            }

            if (!feasibility) {
                return res.status(404).json({
                    message: "No such feasibility"
                })
            }

            feasibility.name = req.body.name ? req.body.name : feasibility.name
            feasibility.numberOfSites = req.body.numberOfSites ? req.body.numberOfSites : feasibility.name
            feasibility.product = req.body.product ? req.body.product : feasibility.product
            feasibility.dateReceived = req.body.dateReceived ? req.body.dateReceived : feasibility.dateReceived
            feasibility.dateCompleted = req.body.dateCompleted ? req.body.dateCompleted : feasibility.dateCompleted

            feasibility.save((err, updatedFeasibility) => {
                if (err) {
                    return res.status(500).json({err})
                }

                return res.status(201).json(updatedFeasibility)
            })
        })
    },

    remove: async function (req, res) {
        const id = req.params.id

        FeasibilityModel.findByIdAndRemove(id, (err, feasibility) => {
            if (err) {
                return res.status(500).json({err})
            }

            return res.status(204).json({feasibility})
        })
    }
};

module.exports = options;
