import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const updateSettings: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="updateSettings"
         />

        <Description
          ns="."
          name="updateSettings"
          comment=""
        />

       <Discuss
          ns="."
          name="updateSettings"
       />
      </div>
  )
}

export default updateSettings