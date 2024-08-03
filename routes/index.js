import express from 'express';
import users from './users.js'
import addresses from './addresses.js'
import exportCsv from './exportCsv.js'

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.use('/users', users)
router.use('/addresses', addresses)
router.use('/export-csv', exportCsv)

export default router;