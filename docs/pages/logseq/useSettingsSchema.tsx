import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const useSettingsSchema: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="useSettingsSchema"
         />

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