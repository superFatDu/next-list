// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json()
//   return {
//     props: {
//       mutu: data
//     }
//   }
// }
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '../../styles/mutu.module.css'
const Mutu = () => {
  const [mutu, setMutu] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
      setMutu(data)
    }
    getData()
  }, [])
  return (
    <div>
      <h1>All Users</h1>
      {
        mutu.map(i => (
          <Link href={'/mutu/' + i.id} key={i.id}>
            <a className={styles.single}>
              <h3>{i.name}</h3>
            </a>
          </Link>
        ))
      }
    </div>
  );
}

export default Mutu;