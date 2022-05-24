import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const updateSettings: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="updateSettings"
          comment=""
        />

       <Discuss
          ns="."
          name="updateSettings"
       />
      </div>
  )
}

export default updateSettings