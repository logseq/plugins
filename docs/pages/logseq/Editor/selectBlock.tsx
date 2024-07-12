import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const selectBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="selectBlock"
         />

        <Description
          ns="Editor"
          name="selectBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="selectBlock"
       />
      </div>
  )
}

export default selectBlock