import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const createTemplate: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="createTemplate"
         />

        <Description
          ns="App"
          name="createTemplate"
          comment=""
        />

       <Discuss
          ns="App"
          name="createTemplate"
       />
      </div>
  )
}

export default createTemplate