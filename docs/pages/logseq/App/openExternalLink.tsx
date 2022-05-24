import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const openExternalLink: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="openExternalLink"
          comment=""
        />

       <Discuss
          ns="App"
          name="openExternalLink"
       />
      </div>
  )
}

export default openExternalLink