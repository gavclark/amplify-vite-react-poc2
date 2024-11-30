import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { KpiDefinition } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type KpiDefinitionUpdateFormInputValues = {
    kpiCode?: string;
    kpiArea?: string;
    kpiTitle?: string;
    kpiDataType?: string;
    kpiDescription?: string;
    kpiCalculationExplanation?: string;
    kpiCalculationDataPoints?: string;
    kpiCalculationCategory?: string;
    kpiDataGranularity?: string;
    kpiDataSource?: string;
    kpiFunctionalOwner?: string;
    kpiTargets?: string;
    kpiSource?: string;
    kpiNotes?: string;
    kpiValidFrom?: string;
    kpiValidTo?: string;
    kpiDashboardNotes?: string;
    kpiTranslationRule?: string;
};
export declare type KpiDefinitionUpdateFormValidationValues = {
    kpiCode?: ValidationFunction<string>;
    kpiArea?: ValidationFunction<string>;
    kpiTitle?: ValidationFunction<string>;
    kpiDataType?: ValidationFunction<string>;
    kpiDescription?: ValidationFunction<string>;
    kpiCalculationExplanation?: ValidationFunction<string>;
    kpiCalculationDataPoints?: ValidationFunction<string>;
    kpiCalculationCategory?: ValidationFunction<string>;
    kpiDataGranularity?: ValidationFunction<string>;
    kpiDataSource?: ValidationFunction<string>;
    kpiFunctionalOwner?: ValidationFunction<string>;
    kpiTargets?: ValidationFunction<string>;
    kpiSource?: ValidationFunction<string>;
    kpiNotes?: ValidationFunction<string>;
    kpiValidFrom?: ValidationFunction<string>;
    kpiValidTo?: ValidationFunction<string>;
    kpiDashboardNotes?: ValidationFunction<string>;
    kpiTranslationRule?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KpiDefinitionUpdateFormOverridesProps = {
    KpiDefinitionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    kpiCode?: PrimitiveOverrideProps<TextFieldProps>;
    kpiArea?: PrimitiveOverrideProps<SelectFieldProps>;
    kpiTitle?: PrimitiveOverrideProps<TextFieldProps>;
    kpiDataType?: PrimitiveOverrideProps<SelectFieldProps>;
    kpiDescription?: PrimitiveOverrideProps<TextFieldProps>;
    kpiCalculationExplanation?: PrimitiveOverrideProps<TextFieldProps>;
    kpiCalculationDataPoints?: PrimitiveOverrideProps<TextFieldProps>;
    kpiCalculationCategory?: PrimitiveOverrideProps<SelectFieldProps>;
    kpiDataGranularity?: PrimitiveOverrideProps<SelectFieldProps>;
    kpiDataSource?: PrimitiveOverrideProps<SelectFieldProps>;
    kpiFunctionalOwner?: PrimitiveOverrideProps<TextFieldProps>;
    kpiTargets?: PrimitiveOverrideProps<TextFieldProps>;
    kpiSource?: PrimitiveOverrideProps<TextFieldProps>;
    kpiNotes?: PrimitiveOverrideProps<TextFieldProps>;
    kpiValidFrom?: PrimitiveOverrideProps<TextFieldProps>;
    kpiValidTo?: PrimitiveOverrideProps<TextFieldProps>;
    kpiDashboardNotes?: PrimitiveOverrideProps<TextFieldProps>;
    kpiTranslationRule?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type KpiDefinitionUpdateFormProps = React.PropsWithChildren<{
    overrides?: KpiDefinitionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    kpiDefinition?: KpiDefinition;
    onSubmit?: (fields: KpiDefinitionUpdateFormInputValues) => KpiDefinitionUpdateFormInputValues;
    onSuccess?: (fields: KpiDefinitionUpdateFormInputValues) => void;
    onError?: (fields: KpiDefinitionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KpiDefinitionUpdateFormInputValues) => KpiDefinitionUpdateFormInputValues;
    onValidate?: KpiDefinitionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function KpiDefinitionUpdateForm(props: KpiDefinitionUpdateFormProps): React.ReactElement;
