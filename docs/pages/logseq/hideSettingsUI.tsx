import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const hideSettingsUI: NextPage = () => {
  return (
      <div className="main-page-content">
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