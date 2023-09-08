import { useMemo } from 'react'
import { I18n } from 'aws-amplify'
import { AboSystemType, RhFactorType, PackType, PackStatus } from '@/API'

export function useAboSystemOptions () {
  return useMemo(() => [{
    value: AboSystemType.A,
    label: I18n.get('pack.aboSystem.a')
  },{
    value: AboSystemType.B,
    label: I18n.get('pack.aboSystem.b')
  },{
    value: AboSystemType.O,
    label: I18n.get('pack.aboSystem.o')
  },{
    value: AboSystemType.AB,
    label: I18n.get('pack.aboSystem.ab')
  }], [])
}

export function useRhFactorOptions () {
  return useMemo(() => [{
    value: RhFactorType.NEGATIVE,
    label: I18n.get('pack.rhFactor.positive')
  }, {
    value: RhFactorType.POSITIVE,
    label: I18n.get('pack.rhFactor.negative')
  }], [])
}

export function usePackTypeOptions () {
  return useMemo(() => [{
    value: PackType.FFP,
    label: I18n.get('pack.type.ffp')
  },{
    value: PackType.RBC,
    label: I18n.get('pack.type.rbc')
  },{
    value: PackType.PLT,
    label: I18n.get('pack.type.plt')
  }], [])
}

export function usePackStatusOptions () {
  return useMemo(() => [{
    value: PackStatus.UNOPENED,
    label: I18n.get('pack.status.unopened'),
  }, {
    value: PackStatus.RETURNED,
    label: I18n.get('pack.status.returned'),
  }, {
    value: PackStatus.USED,
    label: I18n.get('pack.status.used'),
  }, {
    value: PackStatus.OPENED,
    label: I18n.get('pack.status.opened'),
  }, {
    value: PackStatus.DISPOSED,
    label: I18n.get('pack.status.disposed'),
  }], [])
}
