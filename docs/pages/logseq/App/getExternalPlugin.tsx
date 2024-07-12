import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getExternalPlugin: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="getExternalPlugin"
         />

        <Description
          ns="App"
          name="getExternalPlugin"
          comment=""
        />

       <Discuss
          ns="App"
          name="getExternalPlugin"
       />
      </div>
  )
}

export default getExternalPlugin