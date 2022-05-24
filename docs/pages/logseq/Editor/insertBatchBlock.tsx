import { NextPage } from 'next'
import { Description } from '@/components/Description'

const insertBatchBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="insertBatchBlock"
          comment=""
        />
      </div>
  )
}

export default insertBatchBlock