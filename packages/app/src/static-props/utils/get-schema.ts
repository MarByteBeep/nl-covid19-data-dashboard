import { JsonDataScope, VerboseFeature } from '@corona-dashboard/common';
import path from 'path';
import { schemaRootPath } from '~/static-props/feature-flags/feature-flag-constants';
import { loadJsonFromFile } from '~/static-props/utils/load-json-from-file';
import { MetricType } from '../feature-flags/initialize-feature-flagged-data';

export type AjvPropertyDef = { type?: MetricType; $ref: string; enum?: any[] };

export type AjvSchema = {
  $schema: string;
  type: string;
  title: string;
  additionalProperties: boolean;
  required: string[];
  properties: Record<string, AjvPropertyDef>;
  definitions?: Record<string, AjvSchema>;
};

export function getSchema(feature: VerboseFeature, scope: JsonDataScope) {
  const rootSchemaPath = path.join(schemaRootPath, scope, '__index.json');
  const rootSchema = loadJsonFromFile<AjvSchema>(rootSchemaPath);
  const metricSchemaPath = path.join(
    schemaRootPath,
    scope,
    `${feature.metricName}.json`
  );
  const metricSchema = loadJsonFromFile<AjvSchema>(metricSchemaPath);
  return [rootSchema, metricSchema] as const;
}
