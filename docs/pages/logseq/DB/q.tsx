import { NextPage } from 'next'
import { Description } from '@/components/Description'

const q: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="DB"
          name="q"
          comment="
"
        />
      </div>
  )
}

export default q