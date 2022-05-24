import { NextPage } from 'next'
import { Description } from '@/components/Description'

const onBlockChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="DB"
          name="onBlockChanged"
          comment="
"
        />
      </div>
  )
}

export default onBlockChanged