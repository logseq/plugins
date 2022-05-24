import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getCurrentGraph: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="getCurrentGraph"
          comment=""
        />

       <Discuss
          ns="App"
          name="getCurrentGraph"
       />
      </div>
  )
}

export default getCurrentGraph