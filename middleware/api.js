const apiKeyValidation = async (req, res, next) => {
    try {
        const apiKey = req.header("api-key");
        const avialiableApiKey = "BA673A414C3B44C98478BB5CF10A0F832574090C";
        if(!apiKey) {
            return res.status(400).json({msg : "API key unavialiable."});
        }
        if(apiKey === avialiableApiKey) {
            return res.status(200).json({msg : "API key validation success."});
        } else {
            return res.status(400).json({msg : "API key validation fail."});
        }

        next();
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = apiKeyValidation;