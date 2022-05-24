import { NextPage } from 'next'
import { Description } from '@/components/Description'

const openExternalLink: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="openExternalLink"
          comment=""
        />
      </div>
  )
}

export default openExternalLink