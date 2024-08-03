import 'dotenv/config.js'
import '../../config/database.js'

import users from './users.js'
import addresses from './addresses.js'
import { Address } from '../Address.js'
import { User } from '../user.js'


let newUsers = async (users) => await User.insertMany(users)
let newAdrress = async (addresses) => await Address.insertMany(addresses)


let data = async () => {
    // await newUsers(users)
    await newAdrress(addresses)
}

data()