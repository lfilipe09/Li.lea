import Home, { HomeTemplateProps } from 'templates/Home'
import bannerItems from '../components/BannerSlider/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const response = await fetch('/api/get-likes', {
    method: 'GET'
  })
  const data = await response.json()

  return {
    revalidate: 10,
    props: {
      HeaderTitle: 'Liderança 4.0',
      author: 'Thomaz Lira Gomes',
      publicationDate: '2022-04-24T15:27:03.044Z',
      backgroundUrl: '/img/background-image.png',
      items: bannerItems,
      chaptersLikes: [
        data.chapterOneLikes,
        data.chapterTwoLikes,
        data.chapterThreeLikes
      ]
    }
  }
}
