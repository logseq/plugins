import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getNextSiblingBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getNextSiblingBlock"
         />

        <Description
          ns="Editor"
          name="getNextSiblingBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getNextSiblingBlock"
       />
      </div>
  )
}

export default getNextSiblingBlock