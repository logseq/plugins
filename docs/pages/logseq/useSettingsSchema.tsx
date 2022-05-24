import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const useSettingsSchema: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="useSettingsSchema"
          comment=""
        />

       <Discuss
          ns="."
          name="useSettingsSchema"
       />
      </div>
  )
}

export default useSettingsSchema