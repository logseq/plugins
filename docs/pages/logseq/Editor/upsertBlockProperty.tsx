import { NextPage } from 'next'
import { Description } from '@/components/Description'

const upsertBlockProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="upsertBlockProperty"
          comment=""
        />
      </div>
  )
}

export default upsertBlockProperty