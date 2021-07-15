//@ts-check
import useSWR from 'swr'
import { mutate } from 'swr'
import { useState } from 'react'

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}
export default function tableDenda() {
  const url = 'http://localhost:3000/api/tb_denda_perhari';

  const { data, error } = useSWR(url, fetcher);

  if (error) {
    return <div>error......</div>
  }
  if (!data) {
    return <div>loading......</div>
  }
  console.log(data);
  return (
    <table className="table my-0" id="dataTable">
      {data.map((tblDat) =>
        <tr>
          <th style={{}}>Denda Perhari </th>
          <td>Rp. {tblDat.denda_perhari}</td>
          <td>
            <a href={`/admin/update-denda_perhari?denda_perhari=${tblDat.denda_perhari}&id=${tblDat.id}`}><button className="btn btn-primary" id="updateButton" type="button" style={{ background: 'rgb(255,172,47)' }}>Update</button></a>
          </td>
        </tr>
      )}
    </table>
  )
}