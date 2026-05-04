class FoodItem {
  infos: string[]
  image: string
  title: string
  score: number
  icon: string
  description: string
  id: number

  constructor(
    id: number,
    infos: string[],
    image: string,
    title: string,
    score: number,
    icon: string,
    description: string,
  ) {
    this.id = id
    this.infos = infos
    this.image = image
    this.title = title
    this.score = score
    this.icon = icon
    this.description = description
  }
}

export default FoodItem
