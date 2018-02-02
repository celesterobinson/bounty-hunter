const express = require("express");
const bountyRoute = express.Router();
const Bounty = require("../models/bounty");

bountyRoute.get("/", (req, res) => {
    Bounty.find((err, bounties) => {
        if (err) return res.status(500).send(err);
        return res.send(bounties);
    })
})

bountyRoute.post("/", (req, res) => {
    const newBounty = new Bounty(req.body);
    newBounty.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newBounty);
    })
})

bountyRoute.get("/:id", (req, res) => {
    Bounty.findById(req.params.id, (err, bounty) => {
        if (err) return res.status(500).send(err);
        return res.send(bounty)
    })
})

bountyRoute.delete("/:id", (req, res)=>{
    Bounty.findByIdAndRemove(req.params.id, (err, deletedBounty)=>{
        if(err) return res.status(500).send(err);
        return res.send(deletedBounty);
    })
})

bountyRoute.put("/:id", (req, res)=>{
    Bounty.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBounty)=>{
        if(err) return res.status(500).send(err);
        return res.send(updatedBounty);
    })
})

module.exports = bountyRoute;