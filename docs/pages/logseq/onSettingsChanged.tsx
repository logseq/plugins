import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onSettingsChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="onSettingsChanged"
         />

        <Description
          ns="."
          name="onSettingsChanged"
          comment=""
        />

       <Discuss
          ns="."
          name="onSettingsChanged"
       />
      </div>
  )
}

export default onSettingsChanged