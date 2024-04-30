import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import antfu from '@antfu/eslint-config'

export function eiog(options?: OptionsConfig & TypedFlatConfigItem, ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.FlatConfig[]>[]): ReturnType<typeof antfu> {
  return antfu({
    unocss: true,
    formatters: true,
    ...options,
  }, ...userConfigs)
}
