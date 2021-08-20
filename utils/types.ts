export type PokemonProps = {
  abilities: any[]
  base_experience: number
  forms: any[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: any[]
  name: string
  order: number
  past_types: any[]
  species: { name: string; url: string }
  sprites: {
    front_default: string
    [key: string]: string | null
  }
  stats: {}[]
  types: {}[]
  weight: number
}
