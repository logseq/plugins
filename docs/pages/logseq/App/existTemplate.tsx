import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const existTemplate: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="existTemplate"
         />

        <Description
          ns="App"
          name="existTemplate"
          comment=""
        />

       <Discuss
          ns="App"
          name="existTemplate"
       />
      </div>
  )
}

export default existTemplate