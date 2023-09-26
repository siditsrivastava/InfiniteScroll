import React , {useEffect,useState} from 'react'
import axios from 'axios'
import './Home.css'

const Home = () => {

  const [image , setImage] = useState([]);
  const[page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=2&limit=${page}`)
    .then((res) => {
      console.log(res.data);
      const data = res.data;
      setImage((prev) => [...prev , ...data]);
  
    })
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [page])
  
  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 10);
      }
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <>
    <div>
      <div className='headling container'>
        <h1> Author's Image</h1>
      </div>
      <div className=' author-image container'>

        {
          image.map((items) => {
            return(
              <div className=''>
            <img src={items.download_url} alt="not_image_found"/>
            </div>
            )
          })
        }
       
      </div>
      
    </div>
    <br></br>
    </>
  )
}

export default Home