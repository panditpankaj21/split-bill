const Group = require('../models/group.model.js'); 

const createNewGroup = async (req, res) => {
    const { groupName, symbol, groupMembers, totalGroupSpending } = req.body;

    if (!groupName || !symbol || !Array.isArray(groupMembers)) {
        return res.status(400).json({ message: "Invalid input data" });
    }

    const newGroup = new Group({
        groupName,
        symbol,
        groupMembers,
        totalGroupSpending
    });

    try {
        const savedGroup = await newGroup.save();
        res.status(201).json(savedGroup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateMembersAmount = async (req, res) => {
    const { groupId, payerId, amountPaid, membersPaidFor } = req.body;

    if (!groupId || !payerId || typeof amountPaid !== 'number' || !Array.isArray(membersPaidFor)) {
        return res.status(400).json({ message: "Invalid input data" });
    }

    try {
        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        }

        const payer = group.groupMembers.id(payerId);
        if (!payer) {
            return res.status(404).json({ message: "Payer not found" });
        }

        let isPayerInvolve = membersPaidFor.includes(payerId);
        let splitAmount;
        if(isPayerInvolve){
            splitAmount = amountPaid / (membersPaidFor.length-1);
        }else{
            splitAmount = amountPaid / membersPaidFor.length;
        }


        let sum = 0;
        membersPaidFor.forEach(memberId => {
            const member = group.groupMembers.id(memberId);
            if(member && member!==payerId) {
                member.currentBalance -= splitAmount;
                sum+=splitAmount;
            }
        });

        payer.currentBalance += sum;
        

        group.totalGroupSpending += amountPaid;

        await group.save();

        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllGroups = async (req, res) => {
    try {
        const groups = await Group.find({});
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createNewGroup,
    updateMembersAmount,
    getAllGroups
};
