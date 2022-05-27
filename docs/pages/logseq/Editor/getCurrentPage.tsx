import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getCurrentPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getCurrentPage"
         />

        <Description
          ns="Editor"
          name="getCurrentPage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getCurrentPage"
       />
      </div>
  )
}

export default getCurrentPage