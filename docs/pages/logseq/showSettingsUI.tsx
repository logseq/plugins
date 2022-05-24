import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const showSettingsUI: NextPage = () => {
  return (
      <div className="main-page-content">
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