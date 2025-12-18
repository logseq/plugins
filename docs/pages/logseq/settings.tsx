import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const settings: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="settings"
         />

        <Description
          ns="."
          name="settings"
          comment=""
        />

       <Discuss
          ns="."
          name="settings"
       />
      </div>
  )
}

export default settings