/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createKpiDefinition } from "./graphql/mutations";
const client = generateClient();
export default function KpiDefinitionCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    kpiCode: "",
    kpiArea: "",
    kpiTitle: "",
    kpiDataType: "",
    kpiDescription: "",
    kpiCalculationExplanation: "",
    kpiCalculationDataPoints: "",
    kpiCalculationCategory: "",
    kpiDataGranularity: "",
    kpiDataSource: "",
    kpiFunctionalOwner: "",
    kpiTargets: "",
    kpiSource: "",
    kpiNotes: "",
    kpiValidFrom: "",
    kpiValidTo: "",
    kpiDashboardNotes: "",
    kpiTranslationRule: "",
  };
  const [kpiCode, setKpiCode] = React.useState(initialValues.kpiCode);
  const [kpiArea, setKpiArea] = React.useState(initialValues.kpiArea);
  const [kpiTitle, setKpiTitle] = React.useState(initialValues.kpiTitle);
  const [kpiDataType, setKpiDataType] = React.useState(
    initialValues.kpiDataType
  );
  const [kpiDescription, setKpiDescription] = React.useState(
    initialValues.kpiDescription
  );
  const [kpiCalculationExplanation, setKpiCalculationExplanation] =
    React.useState(initialValues.kpiCalculationExplanation);
  const [kpiCalculationDataPoints, setKpiCalculationDataPoints] =
    React.useState(initialValues.kpiCalculationDataPoints);
  const [kpiCalculationCategory, setKpiCalculationCategory] = React.useState(
    initialValues.kpiCalculationCategory
  );
  const [kpiDataGranularity, setKpiDataGranularity] = React.useState(
    initialValues.kpiDataGranularity
  );
  const [kpiDataSource, setKpiDataSource] = React.useState(
    initialValues.kpiDataSource
  );
  const [kpiFunctionalOwner, setKpiFunctionalOwner] = React.useState(
    initialValues.kpiFunctionalOwner
  );
  const [kpiTargets, setKpiTargets] = React.useState(initialValues.kpiTargets);
  const [kpiSource, setKpiSource] = React.useState(initialValues.kpiSource);
  const [kpiNotes, setKpiNotes] = React.useState(initialValues.kpiNotes);
  const [kpiValidFrom, setKpiValidFrom] = React.useState(
    initialValues.kpiValidFrom
  );
  const [kpiValidTo, setKpiValidTo] = React.useState(initialValues.kpiValidTo);
  const [kpiDashboardNotes, setKpiDashboardNotes] = React.useState(
    initialValues.kpiDashboardNotes
  );
  const [kpiTranslationRule, setKpiTranslationRule] = React.useState(
    initialValues.kpiTranslationRule
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setKpiCode(initialValues.kpiCode);
    setKpiArea(initialValues.kpiArea);
    setKpiTitle(initialValues.kpiTitle);
    setKpiDataType(initialValues.kpiDataType);
    setKpiDescription(initialValues.kpiDescription);
    setKpiCalculationExplanation(initialValues.kpiCalculationExplanation);
    setKpiCalculationDataPoints(initialValues.kpiCalculationDataPoints);
    setKpiCalculationCategory(initialValues.kpiCalculationCategory);
    setKpiDataGranularity(initialValues.kpiDataGranularity);
    setKpiDataSource(initialValues.kpiDataSource);
    setKpiFunctionalOwner(initialValues.kpiFunctionalOwner);
    setKpiTargets(initialValues.kpiTargets);
    setKpiSource(initialValues.kpiSource);
    setKpiNotes(initialValues.kpiNotes);
    setKpiValidFrom(initialValues.kpiValidFrom);
    setKpiValidTo(initialValues.kpiValidTo);
    setKpiDashboardNotes(initialValues.kpiDashboardNotes);
    setKpiTranslationRule(initialValues.kpiTranslationRule);
    setErrors({});
  };
  const validations = {
    kpiCode: [{ type: "Required" }],
    kpiArea: [],
    kpiTitle: [{ type: "Required" }],
    kpiDataType: [],
    kpiDescription: [{ type: "Required" }],
    kpiCalculationExplanation: [{ type: "Required" }],
    kpiCalculationDataPoints: [{ type: "Required" }],
    kpiCalculationCategory: [],
    kpiDataGranularity: [],
    kpiDataSource: [],
    kpiFunctionalOwner: [],
    kpiTargets: [],
    kpiSource: [],
    kpiNotes: [],
    kpiValidFrom: [],
    kpiValidTo: [],
    kpiDashboardNotes: [],
    kpiTranslationRule: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          kpiCode,
          kpiArea,
          kpiTitle,
          kpiDataType,
          kpiDescription,
          kpiCalculationExplanation,
          kpiCalculationDataPoints,
          kpiCalculationCategory,
          kpiDataGranularity,
          kpiDataSource,
          kpiFunctionalOwner,
          kpiTargets,
          kpiSource,
          kpiNotes,
          kpiValidFrom,
          kpiValidTo,
          kpiDashboardNotes,
          kpiTranslationRule,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createKpiDefinition.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "KpiDefinitionCreateForm")}
      {...rest}
    >
      <TextField
        label="Kpi code"
        isRequired={true}
        isReadOnly={false}
        value={kpiCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode: value,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiCode ?? value;
          }
          if (errors.kpiCode?.hasError) {
            runValidationTasks("kpiCode", value);
          }
          setKpiCode(value);
        }}
        onBlur={() => runValidationTasks("kpiCode", kpiCode)}
        errorMessage={errors.kpiCode?.errorMessage}
        hasError={errors.kpiCode?.hasError}
        {...getOverrideProps(overrides, "kpiCode")}
      ></TextField>
      <SelectField
        label="Kpi area"
        placeholder="Please select an option"
        isDisabled={false}
        value={kpiArea}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea: value,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiArea ?? value;
          }
          if (errors.kpiArea?.hasError) {
            runValidationTasks("kpiArea", value);
          }
          setKpiArea(value);
        }}
        onBlur={() => runValidationTasks("kpiArea", kpiArea)}
        errorMessage={errors.kpiArea?.errorMessage}
        hasError={errors.kpiArea?.hasError}
        {...getOverrideProps(overrides, "kpiArea")}
      >
        <option
          children="Commercial"
          value="Commercial"
          {...getOverrideProps(overrides, "kpiAreaoption0")}
        ></option>
        <option
          children="Customers"
          value="Customers"
          {...getOverrideProps(overrides, "kpiAreaoption1")}
        ></option>
        <option
          children="Financial"
          value="Financial"
          {...getOverrideProps(overrides, "kpiAreaoption2")}
        ></option>
        <option
          children="Operational"
          value="Operational"
          {...getOverrideProps(overrides, "kpiAreaoption3")}
        ></option>
        <option
          children="People"
          value="People"
          {...getOverrideProps(overrides, "kpiAreaoption4")}
        ></option>
        <option
          children="Safety"
          value="Safety"
          {...getOverrideProps(overrides, "kpiAreaoption5")}
        ></option>
        <option
          children="Special projects"
          value="SpecialProjects"
          {...getOverrideProps(overrides, "kpiAreaoption6")}
        ></option>
        <option
          children="Sustainability"
          value="Sustainability"
          {...getOverrideProps(overrides, "kpiAreaoption7")}
        ></option>
      </SelectField>
      <TextField
        label="Kpi title"
        isRequired={true}
        isReadOnly={false}
        value={kpiTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle: value,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiTitle ?? value;
          }
          if (errors.kpiTitle?.hasError) {
            runValidationTasks("kpiTitle", value);
          }
          setKpiTitle(value);
        }}
        onBlur={() => runValidationTasks("kpiTitle", kpiTitle)}
        errorMessage={errors.kpiTitle?.errorMessage}
        hasError={errors.kpiTitle?.hasError}
        {...getOverrideProps(overrides, "kpiTitle")}
      ></TextField>
      <SelectField
        label="Kpi data type"
        placeholder="Please select an option"
        isDisabled={false}
        value={kpiDataType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType: value,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiDataType ?? value;
          }
          if (errors.kpiDataType?.hasError) {
            runValidationTasks("kpiDataType", value);
          }
          setKpiDataType(value);
        }}
        onBlur={() => runValidationTasks("kpiDataType", kpiDataType)}
        errorMessage={errors.kpiDataType?.errorMessage}
        hasError={errors.kpiDataType?.hasError}
        {...getOverrideProps(overrides, "kpiDataType")}
      >
        <option
          children="Whole number"
          value="WholeNumber"
          {...getOverrideProps(overrides, "kpiDataTypeoption0")}
        ></option>
        <option
          children="Decimal"
          value="Decimal"
          {...getOverrideProps(overrides, "kpiDataTypeoption1")}
        ></option>
        <option
          children="Percentage"
          value="Percentage"
          {...getOverrideProps(overrides, "kpiDataTypeoption2")}
        ></option>
        <option
          children="Date"
          value="Date"
          {...getOverrideProps(overrides, "kpiDataTypeoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Kpi description"
        isRequired={true}
        isReadOnly={false}
        value={kpiDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription: value,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiDescription ?? value;
          }
          if (errors.kpiDescription?.hasError) {
            runValidationTasks("kpiDescription", value);
          }
          setKpiDescription(value);
        }}
        onBlur={() => runValidationTasks("kpiDescription", kpiDescription)}
        errorMessage={errors.kpiDescription?.errorMessage}
        hasError={errors.kpiDescription?.hasError}
        {...getOverrideProps(overrides, "kpiDescription")}
      ></TextField>
      <TextField
        label="Kpi calculation explanation"
        isRequired={true}
        isReadOnly={false}
        value={kpiCalculationExplanation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation: value,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiCalculationExplanation ?? value;
          }
          if (errors.kpiCalculationExplanation?.hasError) {
            runValidationTasks("kpiCalculationExplanation", value);
          }
          setKpiCalculationExplanation(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "kpiCalculationExplanation",
            kpiCalculationExplanation
          )
        }
        errorMessage={errors.kpiCalculationExplanation?.errorMessage}
        hasError={errors.kpiCalculationExplanation?.hasError}
        {...getOverrideProps(overrides, "kpiCalculationExplanation")}
      ></TextField>
      <TextField
        label="Kpi calculation data points"
        isRequired={true}
        isReadOnly={false}
        value={kpiCalculationDataPoints}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints: value,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiCalculationDataPoints ?? value;
          }
          if (errors.kpiCalculationDataPoints?.hasError) {
            runValidationTasks("kpiCalculationDataPoints", value);
          }
          setKpiCalculationDataPoints(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "kpiCalculationDataPoints",
            kpiCalculationDataPoints
          )
        }
        errorMessage={errors.kpiCalculationDataPoints?.errorMessage}
        hasError={errors.kpiCalculationDataPoints?.hasError}
        {...getOverrideProps(overrides, "kpiCalculationDataPoints")}
      ></TextField>
      <SelectField
        label="Kpi calculation category"
        placeholder="Please select an option"
        isDisabled={false}
        value={kpiCalculationCategory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory: value,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiCalculationCategory ?? value;
          }
          if (errors.kpiCalculationCategory?.hasError) {
            runValidationTasks("kpiCalculationCategory", value);
          }
          setKpiCalculationCategory(value);
        }}
        onBlur={() =>
          runValidationTasks("kpiCalculationCategory", kpiCalculationCategory)
        }
        errorMessage={errors.kpiCalculationCategory?.errorMessage}
        hasError={errors.kpiCalculationCategory?.hasError}
        {...getOverrideProps(overrides, "kpiCalculationCategory")}
      >
        <option
          children="Aggregation required"
          value="AggregationRequired"
          {...getOverrideProps(overrides, "kpiCalculationCategoryoption0")}
        ></option>
        <option
          children="No aggregation required"
          value="NoAggregationRequired"
          {...getOverrideProps(overrides, "kpiCalculationCategoryoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Kpi data granularity"
        placeholder="Please select an option"
        isDisabled={false}
        value={kpiDataGranularity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity: value,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiDataGranularity ?? value;
          }
          if (errors.kpiDataGranularity?.hasError) {
            runValidationTasks("kpiDataGranularity", value);
          }
          setKpiDataGranularity(value);
        }}
        onBlur={() =>
          runValidationTasks("kpiDataGranularity", kpiDataGranularity)
        }
        errorMessage={errors.kpiDataGranularity?.errorMessage}
        hasError={errors.kpiDataGranularity?.hasError}
        {...getOverrideProps(overrides, "kpiDataGranularity")}
      >
        <option
          children="Group"
          value="Group"
          {...getOverrideProps(overrides, "kpiDataGranularityoption0")}
        ></option>
        <option
          children="Operating unit"
          value="Operating_Unit"
          {...getOverrideProps(overrides, "kpiDataGranularityoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Kpi data source"
        placeholder="Please select an option"
        isDisabled={false}
        value={kpiDataSource}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource: value,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiDataSource ?? value;
          }
          if (errors.kpiDataSource?.hasError) {
            runValidationTasks("kpiDataSource", value);
          }
          setKpiDataSource(value);
        }}
        onBlur={() => runValidationTasks("kpiDataSource", kpiDataSource)}
        errorMessage={errors.kpiDataSource?.errorMessage}
        hasError={errors.kpiDataSource?.hasError}
        {...getOverrideProps(overrides, "kpiDataSource")}
      >
        <option
          children="Bu"
          value="BU"
          {...getOverrideProps(overrides, "kpiDataSourceoption0")}
        ></option>
        <option
          children="Central"
          value="Central"
          {...getOverrideProps(overrides, "kpiDataSourceoption1")}
        ></option>
        <option
          children="Ou"
          value="OU"
          {...getOverrideProps(overrides, "kpiDataSourceoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Kpi functional owner"
        isRequired={false}
        isReadOnly={false}
        value={kpiFunctionalOwner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner: value,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiFunctionalOwner ?? value;
          }
          if (errors.kpiFunctionalOwner?.hasError) {
            runValidationTasks("kpiFunctionalOwner", value);
          }
          setKpiFunctionalOwner(value);
        }}
        onBlur={() =>
          runValidationTasks("kpiFunctionalOwner", kpiFunctionalOwner)
        }
        errorMessage={errors.kpiFunctionalOwner?.errorMessage}
        hasError={errors.kpiFunctionalOwner?.hasError}
        {...getOverrideProps(overrides, "kpiFunctionalOwner")}
      ></TextField>
      <TextField
        label="Kpi targets"
        isRequired={false}
        isReadOnly={false}
        value={kpiTargets}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets: value,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiTargets ?? value;
          }
          if (errors.kpiTargets?.hasError) {
            runValidationTasks("kpiTargets", value);
          }
          setKpiTargets(value);
        }}
        onBlur={() => runValidationTasks("kpiTargets", kpiTargets)}
        errorMessage={errors.kpiTargets?.errorMessage}
        hasError={errors.kpiTargets?.hasError}
        {...getOverrideProps(overrides, "kpiTargets")}
      ></TextField>
      <TextField
        label="Kpi source"
        isRequired={false}
        isReadOnly={false}
        value={kpiSource}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource: value,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiSource ?? value;
          }
          if (errors.kpiSource?.hasError) {
            runValidationTasks("kpiSource", value);
          }
          setKpiSource(value);
        }}
        onBlur={() => runValidationTasks("kpiSource", kpiSource)}
        errorMessage={errors.kpiSource?.errorMessage}
        hasError={errors.kpiSource?.hasError}
        {...getOverrideProps(overrides, "kpiSource")}
      ></TextField>
      <TextField
        label="Kpi notes"
        isRequired={false}
        isReadOnly={false}
        value={kpiNotes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes: value,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiNotes ?? value;
          }
          if (errors.kpiNotes?.hasError) {
            runValidationTasks("kpiNotes", value);
          }
          setKpiNotes(value);
        }}
        onBlur={() => runValidationTasks("kpiNotes", kpiNotes)}
        errorMessage={errors.kpiNotes?.errorMessage}
        hasError={errors.kpiNotes?.hasError}
        {...getOverrideProps(overrides, "kpiNotes")}
      ></TextField>
      <TextField
        label="Kpi valid from"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={kpiValidFrom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom: value,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiValidFrom ?? value;
          }
          if (errors.kpiValidFrom?.hasError) {
            runValidationTasks("kpiValidFrom", value);
          }
          setKpiValidFrom(value);
        }}
        onBlur={() => runValidationTasks("kpiValidFrom", kpiValidFrom)}
        errorMessage={errors.kpiValidFrom?.errorMessage}
        hasError={errors.kpiValidFrom?.hasError}
        {...getOverrideProps(overrides, "kpiValidFrom")}
      ></TextField>
      <TextField
        label="Kpi valid to"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={kpiValidTo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo: value,
              kpiDashboardNotes,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiValidTo ?? value;
          }
          if (errors.kpiValidTo?.hasError) {
            runValidationTasks("kpiValidTo", value);
          }
          setKpiValidTo(value);
        }}
        onBlur={() => runValidationTasks("kpiValidTo", kpiValidTo)}
        errorMessage={errors.kpiValidTo?.errorMessage}
        hasError={errors.kpiValidTo?.hasError}
        {...getOverrideProps(overrides, "kpiValidTo")}
      ></TextField>
      <TextField
        label="Kpi dashboard notes"
        isRequired={false}
        isReadOnly={false}
        value={kpiDashboardNotes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes: value,
              kpiTranslationRule,
            };
            const result = onChange(modelFields);
            value = result?.kpiDashboardNotes ?? value;
          }
          if (errors.kpiDashboardNotes?.hasError) {
            runValidationTasks("kpiDashboardNotes", value);
          }
          setKpiDashboardNotes(value);
        }}
        onBlur={() =>
          runValidationTasks("kpiDashboardNotes", kpiDashboardNotes)
        }
        errorMessage={errors.kpiDashboardNotes?.errorMessage}
        hasError={errors.kpiDashboardNotes?.hasError}
        {...getOverrideProps(overrides, "kpiDashboardNotes")}
      ></TextField>
      <SelectField
        label="Kpi translation rule"
        placeholder="Please select an option"
        isDisabled={false}
        value={kpiTranslationRule}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kpiCode,
              kpiArea,
              kpiTitle,
              kpiDataType,
              kpiDescription,
              kpiCalculationExplanation,
              kpiCalculationDataPoints,
              kpiCalculationCategory,
              kpiDataGranularity,
              kpiDataSource,
              kpiFunctionalOwner,
              kpiTargets,
              kpiSource,
              kpiNotes,
              kpiValidFrom,
              kpiValidTo,
              kpiDashboardNotes,
              kpiTranslationRule: value,
            };
            const result = onChange(modelFields);
            value = result?.kpiTranslationRule ?? value;
          }
          if (errors.kpiTranslationRule?.hasError) {
            runValidationTasks("kpiTranslationRule", value);
          }
          setKpiTranslationRule(value);
        }}
        onBlur={() =>
          runValidationTasks("kpiTranslationRule", kpiTranslationRule)
        }
        errorMessage={errors.kpiTranslationRule?.errorMessage}
        hasError={errors.kpiTranslationRule?.hasError}
        {...getOverrideProps(overrides, "kpiTranslationRule")}
      >
        <option
          children="Month end rate"
          value="MonthEndRate"
          {...getOverrideProps(overrides, "kpiTranslationRuleoption0")}
        ></option>
        <option
          children="Monthly average"
          value="MonthlyAverage"
          {...getOverrideProps(overrides, "kpiTranslationRuleoption1")}
        ></option>
        <option
          children="None"
          value="None"
          {...getOverrideProps(overrides, "kpiTranslationRuleoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
