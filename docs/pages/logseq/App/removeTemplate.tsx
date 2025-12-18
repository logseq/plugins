import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeTemplate: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="removeTemplate"
         />

        <Description
          ns="App"
          name="removeTemplate"
          comment=""
        />

       <Discuss
          ns="App"
          name="removeTemplate"
       />
      </div>
  )
}

export default removeTemplate