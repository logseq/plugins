import { NextPage } from 'next'
import { Description } from '@/components/Description'

const updateSettings: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="updateSettings"
          comment=""
        />
      </div>
  )
}

export default updateSettings