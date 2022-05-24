import { NextPage } from 'next'
import { Description } from '@/components/Description'

const hideSettingsUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="hideSettingsUI"
          comment=""
        />
      </div>
  )
}

export default hideSettingsUI