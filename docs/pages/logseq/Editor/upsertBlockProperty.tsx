import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const upsertBlockProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="upsertBlockProperty"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="upsertBlockProperty"
       />
      </div>
  )
}

export default upsertBlockProperty