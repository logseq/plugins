import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const insertBatchBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="insertBatchBlock"
         />

        <Description
          ns="Editor"
          name="insertBatchBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="insertBatchBlock"
       />
      </div>
  )
}

export default insertBatchBlock