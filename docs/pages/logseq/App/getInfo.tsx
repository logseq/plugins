import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getInfo: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="getInfo"
         />

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