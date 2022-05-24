import { NextPage } from 'next'
import { Description } from '@/components/Description'

const useSettingsSchema: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="useSettingsSchema"
          comment=""
        />
      </div>
  )
}

export default useSettingsSchema