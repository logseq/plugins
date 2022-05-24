import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const pushState: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="pushState"
          comment=""
        />

       <Discuss
          ns="App"
          name="pushState"
       />
      </div>
  )
}

export default pushState