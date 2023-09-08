import * as api from "@/API";

export type Pack = Pick<api.Pack, 'id' | 'name' | 'status' | 'aboSystem' | 'rhFactor' | 'type' | 'quantity' | 'createdAt' | 'expiredAt'>

export type PackListItem = Pick<api.Pack, 'id' | 'name' | 'status' | 'aboSystem' | 'rhFactor' | 'type' | 'quantity' | 'createdAt' | 'expiredAt'>
