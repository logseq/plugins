import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getSelectedBlocks: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getSelectedBlocks"
         />

        <Description
          ns="Editor"
          name="getSelectedBlocks"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getSelectedBlocks"
       />
      </div>
  )
}

export default getSelectedBlocks