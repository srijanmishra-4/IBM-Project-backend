const { generateOTP } = require("../auth/generateOTP");
const { verifyUser } = require("../auth/verifyUser")

exports.singIn = async (req, res) => {

    // console.log('inside login ')

    const { email, password } = req.body

    // console.log("Email:", req.body.email);
    // console.log("Password:", req.body.password);


    try {
        const response = await verifyUser(email, password)
        if (response.status === 200) {
            return res.status(200).json({ token: response.token });
        }
        return res.status(401).json({ message: 'Invalid credentials (Login)' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error (Login)' });
    }

}

exports.signOut = async (req, res) => {

}

exports.generateOTP = async (req, res) => {
    const email = req.query
    console.log('Inside generate OTP')
    try {
        const otpData = await generateOTP(email);
        res.status(200).json(otpData);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }

}

exports.verifyOTP = async (req, res) => {

}