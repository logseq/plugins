import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const addBlockTag: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="addBlockTag"
         />

        <Description
          ns="Editor"
          name="addBlockTag"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="addBlockTag"
       />
      </div>
  )
}

export default addBlockTag