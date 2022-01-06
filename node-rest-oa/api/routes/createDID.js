const express = require('express');
const { Wallet } = require("ethers");

const router = express.Router();

router.get('/', (req, res, next) => {
        //const wallet = Wallet.fromMnemonic("tourist quality multiply denial diary height funny calm disease buddy speed gold");        
        var mneumonic = req.query.mn;
        if(!mneumonic)
        {
            var mn = Wallet.createRandom().mnemonic;
            mneumonic = mn.phrase;
        }
        const wallet = Wallet.fromMnemonic(mneumonic);        
        res.status(200).json({
            wallet: wallet
        });        
   });

module.exports = router;