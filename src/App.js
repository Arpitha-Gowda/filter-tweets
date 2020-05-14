import React, {useState, useEffect} from 'react';
import tweetService from './services/tweets';
import Tags from './components/tags'; 

const App = () => {
  const [ tags, setTags] = useState([])

  useEffect(() => {
    tweetService
    .getTags()
      .then(response => {
        setTags(response._embedded.tag)
      })
  }, [])

  return (
    <div className='main'>
          <Tags tags={tags} setTags={setTags} />
    </div>
  )
}

export default App