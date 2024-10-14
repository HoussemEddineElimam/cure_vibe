import {Pool} from "pg";
const pool = new Pool({
    host:"localhost",
    port:5433,
    user:"postgres",
    password:"123456789",
    database:"cure_vibe"
});
export default pool;