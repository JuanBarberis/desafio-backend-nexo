import express from 'express';
import exportUsersWithAddressesToCSV from '../controllers/exportCsv/exportCsv.js';

let router = express.Router();

router.get('/', exportUsersWithAddressesToCSV)

export default router;
