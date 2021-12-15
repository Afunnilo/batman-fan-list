export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(batfan => {
        return{
            params:{id: batfan.id.toString()}
        }
    })
    return {
        paths,
        fallback:false
    }
} 

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    return{
        props: { batfan: data}
    }
}
const Details = ({batfan}) => {
    return ( 
        <div>
          <h1>Name: {batfan.name}</h1>
          <p>Email: {batfan.email}</p>
          <p>Website: {batfan.website}</p>
          <p>City: {batfan.address.city}</p>
          <p></p>
        </div>
     );
}
 
export default Details;