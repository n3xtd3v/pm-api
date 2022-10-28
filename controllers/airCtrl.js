const mssql = require('mssql')

const airCtrl = {
  getAir: async (req, res) => {
    try {
      const air = await mssql.query`
      SELECT * 
      FROM PM_Hospital
      `
      return res.status(200).json({ air: air.recordset[0] })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
}

module.exports = airCtrl
