export type ResponseData = {
  id: number
  title: string
  thumbnail: {
    path: string
    extension: string
  }
  series: {
    name: string
  }
}

interface ComicsProps {
  comics: ResponseData[]
}

export default ComicsProps
