import React, {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import "./style.scss";
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/LazyLoadImage/img';
import ContentWrapper from '../../../components/constentWrapper/constentWrapper';

const heroBanner = () => {
  const[background, setBackground] = useState("");
  const[query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state) => state.home); 
  const {data, loading} = useFetch("/movie/upcoming");

  console.log(url);

  useEffect(() => {
    const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data])


  const searchQueryHandler = (event) => {
    if(event.key == "Enter" && query.length > 0){
      navigate(`/search/:${query}`)
    }
  }
  return (
    <div className="heroBanner">
      { !loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, Tv shows and people to discover. 
            Explore now.
          </span>
          <div className="searchInput">
            <input type="text" 
            placeholder='search for a movies and tv shows...'
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
             />
            <button>Search</button>
          </div>
        </div>
        </ContentWrapper>
    </div>
  )
}

export default heroBanner