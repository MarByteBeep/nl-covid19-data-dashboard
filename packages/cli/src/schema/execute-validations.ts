import { ErrorObject, ValidateFunction } from 'ajv';
import { isDefined } from 'ts-is-present';
import { JSONObject } from './custom-validations';
import { SchemaInfoItem } from './schema-info';

type ValidationResult = {
	isValid: boolean;
	schemaErrors?: (ErrorObject | string)[];
};

/**
 *
 * This function execute the AJV schema validation along with the optional custom validations
 * described in the given schema info.
 * The validation result along with any possible error messages are returned.
 *
 */
export function executeValidations(
	validateFunction: ValidateFunction,
	data: JSONObject,
	schemaInfo: SchemaInfoItem
): ValidationResult {
	let isValid = validateFunction(data) as boolean;
	let schemaErrors: (ErrorObject | string)[] = validateFunction.errors ?? [];

	if (schemaInfo.customValidations) {
		const errors = schemaInfo.customValidations
			.flatMap((validationFunc) => validationFunc(data))
			.filter(isDefined);

		if (errors !== undefined) {
			schemaErrors = schemaErrors.concat(errors);
		}

		if (isValid) {
			isValid = !errors?.length;
		}
	}

	return { isValid, schemaErrors };
}
