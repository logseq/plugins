import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const upsertProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="upsertProperty"
         />

        <Description
          ns="Editor"
          name="upsertProperty"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="upsertProperty"
       />
      </div>
  )
}

export default upsertProperty