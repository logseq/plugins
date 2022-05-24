import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onSettingsChanged: NextPage = () => {
  return (
      <div className="main-page-content">
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