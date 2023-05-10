import express from 'express';
// import mongoose from 'mongoose';
import schoolRegistration from '../models/schoolRegistrationSchema';

const router = express.Router();




const createSchool = async (req, res) => {
    console.log('createSchool Called in backend')
    const { schoolname, schooladdress, pin, city, state, country, mobile } = req.body;

    const newSchoolRegistration = new schoolRegistration({ schoolname, schooladdress, pin, city, state, country, mobile })

    try {
        await newSchoolRegistration.save();

        res.status(201).json(newSchoolRegistration );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default createSchool;