/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getKpiDefinition = /* GraphQL */ `
  query GetKpiDefinition($id: ID!) {
    getKpiDefinition(id: $id) {
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
export const listKpiDefinitionByKpiCode = /* GraphQL */ `
  query ListKpiDefinitionByKpiCode(
    $filter: ModelKpiDefinitionFilterInput
    $kpiCode: String!
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listKpiDefinitionByKpiCode(
      filter: $filter
      kpiCode: $kpiCode
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listKpiDefinitions = /* GraphQL */ `
  query ListKpiDefinitions(
    $filter: ModelKpiDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKpiDefinitions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
