import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const settings: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="settings"
          comment="The plugin user settings"
        />

       <Discuss
          ns="."
          name="settings"
       />
      </div>
  )
}

export default settings