import { JsonDataScope, MockConfiguration } from '@corona-dashboard/common';

const choroplethScopes: JsonDataScope[] = [
  'in_collection',
  'vr_collection',
  'gm_collection',
];

type ChoroplethScope = 'in_collection' | 'vr_collection' | 'gm_collection';

function isChoroplethScope(value: JsonDataScope): value is ChoroplethScope {
  return choroplethScopes.includes(value);
}

export function generateMockData<T>(
  configuration: MockConfiguration<T>,
  scope: JsonDataScope
) {
  if (isChoroplethScope(scope)) {
    return generateMockChoroplethData(configuration, scope);
  }
}

function generateMockChoroplethData<T>(
  configuration: MockConfiguration<T>,
  scope: ChoroplethScope
) {}
