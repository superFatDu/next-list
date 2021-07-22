// export const getStaticProps = async (context) => {
//   console.log(context)
//   return {
//     props: {}
//   }
//   const res = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
// }
import Link from 'next/link'

export const getStaticPaths = async () => {
  const res = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
  const paths = res.map(i => {
    return {
      params: { id: i.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await (await fetch('https://jsonplaceholder.typicode.com/users/' + id)).json()
  return {
    props: {
      mutu: res
    }
  }
}
const Details = ({ mutu }) => {
  return (
    <div>
      <h1>{mutu.name}</h1>
      <p>{mutu.email}</p>
      <p>{mutu.phone}</p>
      <p>{mutu.address.city}</p>
      <p>{mutu.website}</p>
    </div>
  );
}

export default Details;