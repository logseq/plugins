import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const queryElementById: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="queryElementById"
          comment=""
        />

       <Discuss
          ns="App"
          name="queryElementById"
       />
      </div>
  )
}

export default queryElementById