import dotenv from 'dotenv' 
dotenv.config()

import { Pool } from 'pg'
 
const pool = new Pool()

const resp = await pool.query('SELECT NOW() as now')

console.log(resp)

export default resp