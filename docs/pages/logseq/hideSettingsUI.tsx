import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const hideSettingsUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="hideSettingsUI"
         />

        <Description
          ns="."
          name="hideSettingsUI"
          comment=""
        />

       <Discuss
          ns="."
          name="hideSettingsUI"
       />
      </div>
  )
}

export default hideSettingsUI