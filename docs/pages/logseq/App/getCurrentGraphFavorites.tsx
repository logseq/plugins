import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getCurrentGraphFavorites: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="getCurrentGraphFavorites"
         />

        <Description
          ns="App"
          name="getCurrentGraphFavorites"
          comment=""
        />

       <Discuss
          ns="App"
          name="getCurrentGraphFavorites"
       />
      </div>
  )
}

export default getCurrentGraphFavorites