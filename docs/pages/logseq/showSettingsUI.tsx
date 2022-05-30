import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const showSettingsUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="showSettingsUI"
         />

        <Description
          ns="."
          name="showSettingsUI"
          comment=""
        />

       <Discuss
          ns="."
          name="showSettingsUI"
       />
      </div>
  )
}

export default showSettingsUI