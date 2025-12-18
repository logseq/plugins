import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const baseInfo: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="baseInfo"
         />

        <Description
          ns="."
          name="baseInfo"
          comment=""
        />

       <Discuss
          ns="."
          name="baseInfo"
       />
      </div>
  )
}

export default baseInfo