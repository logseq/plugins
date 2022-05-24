import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getInfo: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="getInfo"
          comment=""
        />

       <Discuss
          ns="App"
          name="getInfo"
       />
      </div>
  )
}

export default getInfo