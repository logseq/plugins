import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const openExternalLink: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="openExternalLink"
         />

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