import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const upsertBlockProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="upsertBlockProperty"
         />

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