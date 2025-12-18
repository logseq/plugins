import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const newBlockUUID: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="newBlockUUID"
         />

        <Description
          ns="Editor"
          name="newBlockUUID"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="newBlockUUID"
       />
      </div>
  )
}

export default newBlockUUID