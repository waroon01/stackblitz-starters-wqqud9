var express = require('express');
var router = express.Router();
const db = require('../config/mysql');


/* localhost:4000/getpromotion */
router.get('/getpromotion', async function(req, res, next) {
    const conn = await db.connectMySQL();
    const [rows] = await conn.query("select * from pro_room order by id desc limit 12") //bubble ใช้ได้ไม่เกิน 12
    return res.status(200).json(rows);
});

router.get('/getpromotion/:id', async function(req, res, next) {
  const conn = await db.connectMySQL();
  const [rows] = await conn.query("select * from pro_room Where id = ?", [req.params.id]) //ดึงข้อมูล
  return res.status(200).json(rows[0]);//อย่าลืมใส่อาเรย์ที่ 0
});

module.exports = router;
