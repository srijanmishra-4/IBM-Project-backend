const axios = require('axios');

exports.generateOTP = async (email) => {
    console.log(email)
    try {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isValidEmail) {
            throw new Error("Invalid email format");
        }

        const response = await axios.get(`https://wo2gjev1b6.execute-api.ap-south-1.amazonaws.com/InitDeploy/genrateOTP?email=${email}`);

        if (!response || !response.data) {
            throw new Error("No OTP generated");
        }
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log("generateOTP error:", error.message);
        throw error;
    }
};
