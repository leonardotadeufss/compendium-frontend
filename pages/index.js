import React, { useContext, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../src/components/Header'
import Tag from '../src/components/Tag';
import { TagWrapper } from '../src/components/Tag/style'
import Card from '../src/components/Card'
import { CardWrapper } from '../src/components/Card/style';
import { SeriesContext } from '../src/providers/series.js';
import Loader from '../src/components/Loader'
import axios from './api'


export async function getServerSideProps(context) {

  function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  const series = await axios.get('/series')
    .then(function (response) {
      return (shuffle(response["data"]))
    })
    .catch(function (error) {
      console.log(error);
    })

  if (!series) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: { series }, // will be passed to the page component as props
  }
}




function Home(props) {
  const { setSeries, page, setPage } = useContext(SeriesContext)
  const { series } = props;
  const [hasMore, setHasMore] = useState(true)
  const pageSize = 6;
  const [currentTag, setCurrentTag] = useState("")
  const [currentSeries, setCurrentSeries] = useState(series)

  const taglist = ['D&D', 'Tormenta20', 'Finalizada', 'Em andamento']


  function loadMore() {
    if (page * pageSize > series.length) {
      setCurrentSeries(series.slice(0, page * pageSize))
      setHasMore(false)
    }
    setPage(page + 1)
    setCurrentSeries(series.slice(0, page * pageSize))
    return
  }

  useEffect(() => {
    setCurrentSeries(series.slice(0, page * pageSize))
  }, [series, page])


  function filterByTag(tag) {
    setCurrentSeries(series.filter((serie) => serie.tags.includes(tag) || serie.status === tag))
    setCurrentTag(tag)
    if (series.filter((serie) => serie.tags.includes(tag).length) < pageSize) {
      setHasMore(false)
    }
  }


  function removeFilter() {
    setCurrentTag("")
    setPage(1)
    setHasMore(true)
  }

  return (
    <div className="App">
      <Header />
      <TagWrapper>
        {taglist.map((tag) => <Tag title={tag} key={tag} OnClick={filterByTag} />)}
      </TagWrapper>
      {currentTag &&
        <TagWrapper>
          <Tag title={currentTag} key={currentTag} OnClick={removeFilter}>
            <p>
              x
            </p>
          </Tag>
        </TagWrapper>}
      <InfiniteScroll
        dataLength={currentSeries.length} //This is important field to render the next data
        next={loadMore}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={""} >
        <CardWrapper>
          {currentSeries.map(serie => <Card key={serie._id} OnClick={filterByTag}>{serie}</Card>)}
        </CardWrapper>
      </InfiniteScroll>
    </div >
  );
}

export default Home;


