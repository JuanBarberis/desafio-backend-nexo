import express from 'express';
import users from './users.js'
import addresses from './addresses.js'

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.use('/users', users)
router.use('/addresses', addresses)

export default router;