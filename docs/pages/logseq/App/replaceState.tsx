import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const replaceState: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="replaceState"
          comment=""
        />

       <Discuss
          ns="App"
          name="replaceState"
       />
      </div>
  )
}

export default replaceState