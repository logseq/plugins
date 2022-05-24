import { NextPage } from 'next'
import { Description } from '@/components/Description'

const showSettingsUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="showSettingsUI"
          comment=""
        />
      </div>
  )
}

export default showSettingsUI