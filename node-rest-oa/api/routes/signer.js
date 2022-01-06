const express = require('express');
const { signDocument, SUPPORTED_SIGNING_ALGORITHM } = require("@govtechsg/open-attestation");

const router = express.Router();

router.post('/', (req, res, next) => {
      const wrappedDocument = req.body;
      signDocument(wrappedDocument, SUPPORTED_SIGNING_ALGORITHM.Secp256k1VerificationKey2018, {
            public: req.headers.public,
            private: req.headers.private,
      }).then(ok => {
            res.status(200).json(ok);
      });
});

module.exports = router;