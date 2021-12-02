const express = require("express");
const Company = require("../models/company");
const apiKeyValidation = require("../middleware/api");

const router = express.Router();

// post compnay
router.post("/create", apiKeyValidation, async (req, res) => {
    try {
        const {name} = req.body;

        const newCompany = new Company({
            name : name
        });

        await newCompany.save();

        res.status(200).json(newCompany);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all company
router.get("/", apiKeyValidation, async (req, res) => {
    try {
        const allCompany = await Company.find();

        res.status(200).json(allCompany);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get individual Company
router.get("/:id", apiKeyValidation, async (req, res) => {
    try {
        const id = req.params.id;
        const individualCompany = await Company.findById(id);

        res.status(200).json(individualCompany);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;