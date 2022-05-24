import { NextPage } from 'next'
import { Description } from '@/components/Description'

const settings: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="settings"
          comment="The plugin user settings"
        />
      </div>
  )
}

export default settings