import { NextPage } from 'next'
import { Description } from '@/components/Description'

const baseInfo: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="baseInfo"
          comment="The plugin configurations from package.json"
        />
      </div>
  )
}

export default baseInfo