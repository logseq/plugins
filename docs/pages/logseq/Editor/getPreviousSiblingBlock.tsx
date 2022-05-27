import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getPreviousSiblingBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getPreviousSiblingBlock"
         />

        <Description
          ns="Editor"
          name="getPreviousSiblingBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getPreviousSiblingBlock"
       />
      </div>
  )
}

export default getPreviousSiblingBlock