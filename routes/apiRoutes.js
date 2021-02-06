const Workout = require("../models/workout.js");

module.exports = function (app) {
    
    app.get("/api/workouts", function (req, res) {
        Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration",
                    },
                },
            },
        ])
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", function (req, res) {
        Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration",
                    },
                },
            },
        ])
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    app.post("/api/workouts", function (req, res) {
        Workout.create({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    app.post("/api/workouts/range", function (req, res) {
        Workout.create({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", function (req, res) {
        Workout.findByIdAndUpdate(
            req.params.id,
            {
                $push: { exercises: req.body },
            },
            { new: true, runValidators: true }
        )
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });

};