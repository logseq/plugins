import { NextPage } from 'next'
import { Description } from '@/components/Description'

const addListener: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="addListener"
          comment=""
        />
      </div>
  )
}

export default addListener