/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createKpiDefinition = /* GraphQL */ `
  mutation CreateKpiDefinition(
    $condition: ModelKpiDefinitionConditionInput
    $input: CreateKpiDefinitionInput!
  ) {
    createKpiDefinition(condition: $condition, input: $input) {
      createdAt
      id
      kpiArea
      kpiCalculationCategory
      kpiCalculationDataPoints
      kpiCalculationExplanation
      kpiCode
      kpiDashboardNotes
      kpiDataGranularity
      kpiDataSource
      kpiDataType
      kpiDescription
      kpiFunctionalOwner
      kpiNotes
      kpiSource
      kpiTargets
      kpiTitle
      kpiTranslationRule
      kpiValidFrom
      kpiValidTo
      updatedAt
      __typename
    }
  }
`;
export const deleteKpiDefinition = /* GraphQL */ `
  mutation DeleteKpiDefinition(
    $condition: ModelKpiDefinitionConditionInput
    $input: DeleteKpiDefinitionInput!
  ) {
    deleteKpiDefinition(condition: $condition, input: $input) {
      createdAt
      id
      kpiArea
      kpiCalculationCategory
      kpiCalculationDataPoints
      kpiCalculationExplanation
      kpiCode
      kpiDashboardNotes
      kpiDataGranularity
      kpiDataSource
      kpiDataType
      kpiDescription
      kpiFunctionalOwner
      kpiNotes
      kpiSource
      kpiTargets
      kpiTitle
      kpiTranslationRule
      kpiValidFrom
      kpiValidTo
      updatedAt
      __typename
    }
  }
`;
export const updateKpiDefinition = /* GraphQL */ `
  mutation UpdateKpiDefinition(
    $condition: ModelKpiDefinitionConditionInput
    $input: UpdateKpiDefinitionInput!
  ) {
    updateKpiDefinition(condition: $condition, input: $input) {
      createdAt
      id
      kpiArea
      kpiCalculationCategory
      kpiCalculationDataPoints
      kpiCalculationExplanation
      kpiCode
      kpiDashboardNotes
      kpiDataGranularity
      kpiDataSource
      kpiDataType
      kpiDescription
      kpiFunctionalOwner
      kpiNotes
      kpiSource
      kpiTargets
      kpiTitle
      kpiTranslationRule
      kpiValidFrom
      kpiValidTo
      updatedAt
      __typename
    }
  }
`;
