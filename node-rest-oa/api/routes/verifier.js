const express = require('express');
const { verifySignature } = require("@govtechsg/open-attestation");


const router = express.Router();

router.post('/', (req, res, next) => {
        const verified = verifySignature(req.body);
        if(verified) {
            res.status(200).json("Valid Document");
        }
        else{
            res.status(400).json({
                message: "Invalid document, please try again."
            });
        }

   });

module.exports = router;