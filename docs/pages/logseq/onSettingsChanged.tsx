import { NextPage } from 'next'
import { Description } from '@/components/Description'

const onSettingsChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="onSettingsChanged"
          comment=""
        />
      </div>
  )
}

export default onSettingsChanged