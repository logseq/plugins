import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getStateFromStore: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="getStateFromStore"
         />

        <Description
          ns="App"
          name="getStateFromStore"
          comment=""
        />

       <Discuss
          ns="App"
          name="getStateFromStore"
       />
      </div>
  )
}

export default getStateFromStore