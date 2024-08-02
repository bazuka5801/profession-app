// @index('./**/*.ts', f => `import * as ${f.name} from '${f.path}'`)
import * as augmentedTerritoryDesigner from './augmentedTerritoryDesigner'
import * as concierge from './concierge'
import * as cosmotourismanager from './cosmotourismanager'
import * as infostylist from './infostylist'
import * as penguinFlipper from './penguinFlipper'
import * as restovrator from './restovrator'
import * as salt from './salt'
import * as shinshily from './shinshily'
import * as slesar from './slesar'
// @endindex

export type Profession = {
    name: string
    className: string;
    icon: string;
    description: string
    audioPath?: string
}

export const professions = [
  // @index('./**/*.ts', f => `${f.name}.profession,`)
  augmentedTerritoryDesigner.profession,
  concierge.profession,
  cosmotourismanager.profession,
  infostylist.profession,
  penguinFlipper.profession,
  restovrator.profession,
  salt.profession,
  shinshily.profession,
  slesar.profession
  // @endindex
] as const satisfies Profession[]
