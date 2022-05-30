import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getEditingBlockContent: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getEditingBlockContent"
         />

        <Description
          ns="Editor"
          name="getEditingBlockContent"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getEditingBlockContent"
       />
      </div>
  )
}

export default getEditingBlockContent