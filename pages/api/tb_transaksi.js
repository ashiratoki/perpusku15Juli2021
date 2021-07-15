import { query } from '../../lib/db'

const handler = async (_, res) => {
    try {
      const results = await query(`
      SELECT tb_transaksi.*, tb_siswa.nama, tb_buku.index_buku FROM tb_transaksi
      LEFT OUTER JOIN tb_siswa ON tb_transaksi.nis=tb_siswa.nis
      LEFT OUTER JOIN tb_buku ON tb_transaksi.index_buku=tb_buku.index_buku
      ORDER BY tb_transaksi.id_transaksi ASC
    `)
  
      return res.json(results)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  }
  
  export default handler