export interface IQuestion {
  readonly id: number
  readonly title: string
  readonly choices: string[]
  readonly solution: number
  answer?: number
}

export interface IChoice {
  readonly id: number
  readonly choice: string
  readonly solution: number
  answer?: number
}
