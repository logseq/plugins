import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const prependBlockInPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="prependBlockInPage"
         />

        <Description
          ns="Editor"
          name="prependBlockInPage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="prependBlockInPage"
       />
      </div>
  )
}

export default prependBlockInPage