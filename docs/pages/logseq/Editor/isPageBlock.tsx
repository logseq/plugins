import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const isPageBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="isPageBlock"
         />

        <Description
          ns="Editor"
          name="isPageBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="isPageBlock"
       />
      </div>
  )
}

export default isPageBlock