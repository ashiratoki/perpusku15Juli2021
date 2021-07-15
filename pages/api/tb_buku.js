import { query } from '../../lib/db'

const handler = async (_, res) => {
    try {
      const results = await query(`
      SELECT * FROM tb_buku LEFT OUTER JOIN tb_klasifikasi_buku ON tb_buku.no_klasifikasi=tb_klasifikasi_buku.no_klasifikasi
      ORDER BY tb_buku.id_buku ASC
    `)
  
      return res.json(results)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  }
  
  export default handler

  // SELECT * FROM tb_buku
  //       LIMIT 10