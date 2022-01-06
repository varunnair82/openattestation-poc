const express = require('express');
const { wrapDocument, validateSchema, getData, signDocument, SUPPORTED_SIGNING_ALGORITHM, verifySignature } = require("@govtechsg/open-attestation");
const { isValid, openAttestationVerifiers, verificationBuilder } = require("@govtechsg/oa-verify");
const { Wallet } = require("ethers");
const util = require("util");

const router = express.Router();

router.post('/', (req, res, next) => {
        const wrappedDocument = wrapDocument(req.body);
        if(validateSchema(wrappedDocument)) {
            res.status(200).json(wrappedDocument);
        }
        else{
            res.status(400).json({
                message: "Invalid document, please try again."
            });
        }
   });

module.exports = router;