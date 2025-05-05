const axios = require("axios");
const api = require('../utils/axios')
const User = require("../model/user");

exports.generateTestController = (req, res) => {
    const { jobRole, difficulty, experience, userId } = req.query;

    const loweredJobRole = jobRole?.toLowerCase();
    const loweredDifficulty = difficulty?.toLowerCase();
    const loweredExperience = experience?.toLowerCase();

    return new Promise((resolve, reject) => {
        api.post("/test/generate-test", { jobRole: loweredJobRole, difficulty: loweredDifficulty, experience: loweredExperience })
            .then(async (response) => {
                const responseData = response.data;
                const { Test_ID, Skills, Questions } = responseData.data;

                const testEntry = {
                    [Test_ID]: {
                        Skills,
                        Questions
                    }
                };
                console.log(typeof (userId))
                if (userId) {
                    const updatedUser = await User.findOneAndUpdate(
                        { userId },
                        { $push: { tests: testEntry } },
                        { new: true }
                    );

                    if (!updatedUser) {
                        console.log("User not found with userId:", userId);
                    }
                }

                res.status(200).json(responseData);
                resolve(responseData);
            })
            .catch(error => {
                console.log(error)
                const errorMsg = "Unable to generate test at the moment";
                res.status(500).json({ message: errorMsg, error: error.message });
                reject(errorMsg);
            });

    });
};

exports.evaluateTestController = async (req, res) => {
    const { jobTitle, experience, result, skill } = req.body;

    console.log(jobTitle, experience, skill)

    return new Promise((resolve, reject) => {
        api.post("/test/evaluate-test", { jobTitle, result, Experience: experience, skill })
            .then(response => {
                // console.log(response.data)
                resolve(response.data);
                return res.status(200).json(response.data);
            })
            .catch(error => {
                // console.log(error)
                reject("Unable to evaluate test at the moment");
                return res.status(500).json({ message: "Unable to evaluate test at the moment", error: error.message });
            });
    });
};
