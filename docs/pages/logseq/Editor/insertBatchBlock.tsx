import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const insertBatchBlock: NextPage = () => {
  return (
      <div className="main-page-content">
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