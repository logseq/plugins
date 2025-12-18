import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const clearSelectedBlocks: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="clearSelectedBlocks"
         />

        <Description
          ns="Editor"
          name="clearSelectedBlocks"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="clearSelectedBlocks"
       />
      </div>
  )
}

export default clearSelectedBlocks