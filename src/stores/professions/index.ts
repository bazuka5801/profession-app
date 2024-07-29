// @index('./**/*.ts', f => `import * as ${f.name} from '${f.path}'`)
import * as slesar from './slesar'
// @endindex

export type Profession = {
    name: string
    className: string;
    icon: string;
    description: string
}

export const professions = [
  // @index('./**/*.ts', f => `${f.name}.profession,`)
  slesar.profession
  // @endindex
] satisfies Profession[]
