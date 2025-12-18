import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getTemplate: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="getTemplate"
         />

        <Description
          ns="App"
          name="getTemplate"
          comment=""
        />

       <Discuss
          ns="App"
          name="getTemplate"
       />
      </div>
  )
}

export default getTemplate